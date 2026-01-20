import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { DistanceCalculator } from '../../lib/geo/distance-calculator';
import { LocationType, Worksite } from '@prisma/client';

@Injectable()
export class CheckinService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async createCheckin(createCheckinDto: CreateCheckinDto, userId: string) {
    try {
      const { type, latitude, longitude, leaveType, photo, reason, notes } = createCheckinDto;
      console.log('Checkin request:', { type, latitude, longitude, userId });

    // Validate GPS coordinates (not required for LEAVE)
    if (type !== 'LEAVE') {
      if (!latitude || !longitude || 
          latitude < -90 || latitude > 90 || 
          longitude < -180 || longitude > 180) {
        throw new BadRequestException('Invalid GPS coordinates');
      }
    }

    // Check for duplicate check-in within 1 minute
    const recentCheckin = await this.prisma.checkin.findFirst({
      where: {
        userId,
        type,
        createdAt: {
          gte: new Date(Date.now() - 60000), // 1 minute ago
        },
      },
    });

    if (recentCheckin) {
      throw new BadRequestException('Duplicate check-in detected. Please wait 1 minute.');
    }

    // Skip worksite calculation for LEAVE
    let closestWorksite: Worksite | null = null;
    let minDistance = 0;
    let isOnsite = false;
    let locationType: LocationType = LocationType.OFFSITE;

    if (type !== 'LEAVE') {
      // Get all active worksites
      const worksites = await this.prisma.worksite.findMany({
        where: { isActive: true },
      });

      if (worksites.length === 0) {
        throw new NotFoundException('No active worksites available');
      }

      // Find the closest worksite within range
      minDistance = Infinity;

      for (const worksite of worksites) {
        console.log('worksite', worksite);
        const distance = DistanceCalculator.calculateDistance(
          latitude!,
          longitude!,
          Number(worksite.latitude),
          Number(worksite.longitude),
        );

        if (distance < minDistance) {
          minDistance = distance;
          if (distance <= worksite.radius) {
            closestWorksite = worksite;
          }
        }
      }

      // Determine if this is onsite or offsite checkin
      isOnsite = closestWorksite !== null;
      locationType = isOnsite ? LocationType.ONSITE : LocationType.OFFSITE;
    }

    // Handle different checkin types
    if (type === 'LEAVE') {
      // For leave requests, only require reason
      if (!reason) {
        throw new BadRequestException('Leave request requires reason');
      }
      if (reason.length < 3) {
        throw new BadRequestException('Reason must be at least 3 characters');
      }
      if (leaveType === 'NONE') {
        throw new BadRequestException('Leave type is required for leave requests');
      }
    } else if (type === 'CHECK_IN') {
      // Validate offsite CHECK_IN requirements only
      if (!isOnsite) {
        if (!photo || !reason) {
          throw new BadRequestException(
            `Offsite checkin requires photo and reason. Distance: ${Math.round(minDistance)}m`
          );
        }
        if (reason.length < 3) {
          throw new BadRequestException('Reason must be at least 3 characters');
        }
        if (minDistance > 50000) { // 50km limit
          throw new BadRequestException('Too far from any worksite (>50km)');
        }
      }
    }
    // CHECK_OUT doesn't require area validation

    // Handle photo URL (already uploaded to Supabase by frontend)
    let photoUrl: string | null = null;
    if (photo) {
      // Validate if it's a valid URL or base64
      if (photo.startsWith('http') || photo.startsWith('https')) {
        // Already uploaded to Supabase, use the URL directly
        photoUrl = photo;
      } else if (photo.startsWith('data:image/')) {
        // Still base64, keep for backward compatibility
        photoUrl = `temp-photo-${Date.now()}.jpg`;
      } else {
        throw new BadRequestException('Invalid photo format');
      }
    }

    // Create check-in record
    const checkin = await this.prisma.checkin.create({
      data: {
        type,
        location: type === 'LEAVE' ? LocationType.OFFSITE : locationType,
        leaveType: leaveType || 'NONE',
        latitude: latitude || 0,
        longitude: longitude || 0,
        distance: type === 'LEAVE' ? 0 : minDistance,
        photo: photoUrl,
        reason,
        notes,
        userId,
        worksiteId: type === 'LEAVE' ? null : (closestWorksite?.id || null),
      },
      include: {
        worksite: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    console.log('Checkin created successfully:', checkin.id);
    return checkin;

    } catch (error) {
      console.error('Checkin error:', error);
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Checkin failed: ${error.message}`);
    }
  }

  async getUserHistory(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    
    const [checkins, total] = await Promise.all([
      this.prisma.checkin.findMany({
        where: { userId },
        include: { worksite: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.checkin.count({
        where: { userId },
      }),
    ]);

    return {
      data: checkins,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1,
      },
    };
  }

  async getCheckinStatus(userId: string) {
    const latestCheckin = await this.prisma.checkin.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        worksite: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!latestCheckin) {
      return {
        status: 'NEVER_CHECKED_IN',
        nextAction: 'CHECK_IN',
        message: 'ยังไม่เคยเช็คอิน'
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = latestCheckin.createdAt >= today;

    if (!isToday) {
      return {
        status: 'NEW_DAY',
        nextAction: 'CHECK_IN',
        message: 'เริ่มวันใหม่',
        lastCheckin: latestCheckin
      };
    }

    return {
      status: latestCheckin.type === 'CHECK_IN' ? 'CHECKED_IN' : 'CHECKED_OUT',
      nextAction: latestCheckin.type === 'CHECK_IN' ? 'CHECK_OUT' : 'CHECK_IN',
      message: latestCheckin.type === 'CHECK_IN' ? 'เช็คอินแล้ว' : 'เช็คเอาท์แล้ว',
      lastCheckin: latestCheckin
    };
  }

  async getDailyCheckins() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Get all users
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        picture: true,
      },
    });

    // Get today's checkins for all users
    const todayCheckins = await this.prisma.checkin.findMany({
      where: {
        createdAt: {
          gte: today,
          lt: tomorrow,
        },
      },
      include: { 
        worksite: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Create status for each user
    return users.map(user => {
      const userCheckins = todayCheckins.filter(c => c.userId === user.id);
      const latestCheckin = userCheckins[0];
      
      let status = 'NOT_CHECKED_IN';
      let nextAction: string | null = 'CHECK_IN';
      let message = 'ยังไม่เช็คอิน';
      
      if (latestCheckin) {
        if (latestCheckin.type === 'LEAVE') {
          status = 'ON_LEAVE';
          nextAction = null;
          message = `ลา${latestCheckin.leaveType === 'SICK_LEAVE' ? 'ป่วย' : latestCheckin.leaveType === 'PERSONAL_LEAVE' ? 'กิจ' : 'พักร้อน'}`;
        } else if (latestCheckin.type === 'ABSENT') {
          status = 'ABSENT';
          nextAction = null;
          message = 'ขาดงาน';
        } else if (latestCheckin.type === 'AUTO_CHECKOUT') {
          status = 'AUTO_CHECKOUT';
          nextAction = 'CHECK_IN';
          message = 'เช็คเอาท์อัตโนมัติ';
        } else if (latestCheckin.type === 'CHECK_IN') {
          status = 'CHECKED_IN';
          nextAction = 'CHECK_OUT';
          message = 'เช็คอินแล้ว';
        } else {
          status = 'CHECKED_OUT';
          nextAction = 'CHECK_IN';
          message = 'เช็คเอาท์แล้ว';
        }
      }
      
      return {
        user,
        status,
        nextAction,
        message,
        latestCheckin,
        todayCheckins: userCheckins,
      };
    });
  }
}