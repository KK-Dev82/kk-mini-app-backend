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
      const { type, latitude, longitude, photo, reason, notes } = createCheckinDto;
      console.log('Checkin request:', { type, latitude, longitude, userId });

    // Validate GPS coordinates
    if (!latitude || !longitude || 
        latitude < -90 || latitude > 90 || 
        longitude < -180 || longitude > 180) {
      throw new BadRequestException('Invalid GPS coordinates');
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

    // Get all active worksites
    const worksites = await this.prisma.worksite.findMany({
      where: { isActive: true },
    });

    if (worksites.length === 0) {
      throw new NotFoundException('No active worksites available');
    }

    // Find the closest worksite within range
    let closestWorksite: Worksite | null = null;
    let minDistance = Infinity;


    for (const worksite of worksites) {
      console.log('worksite', worksite);
      const distance = DistanceCalculator.calculateDistance(
        latitude,
        longitude,
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
    const isOnsite = closestWorksite !== null;
    const locationType = isOnsite ? LocationType.ONSITE : LocationType.OFFSITE;

    // Validate offsite checkin requirements
    if (!isOnsite) {
      if (!photo || !reason) {
        throw new BadRequestException(
          `Offsite checkin requires photo and reason. Distance: ${Math.round(minDistance)}m`
        );
      }
      if (reason.length < 10) {
        throw new BadRequestException('Reason must be at least 10 characters');
      }
      if (minDistance > 50000) { // 50km limit
        throw new BadRequestException('Too far from any worksite (>50km)');
      }
    }

    // Upload photo if provided (simplified for now)
    let photoUrl: string | null = null;
    if (photo) {
      // TODO: Implement photo upload to Supabase
      photoUrl = `temp-photo-${Date.now()}.jpg`;
    }

    // Create check-in record
    const checkin = await this.prisma.checkin.create({
      data: {
        type,
        location: locationType,
        latitude,
        longitude,
        distance: minDistance,
        photo: photoUrl,
        reason,
        notes,
        userId,
        worksiteId: closestWorksite?.id || null,
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

  async getUserHistory(userId: string) {
    return this.prisma.checkin.findMany({
      where: { userId },
      include: { worksite: true },
      orderBy: { createdAt: 'desc' },
    });
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
}