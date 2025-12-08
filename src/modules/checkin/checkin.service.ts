import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { DistanceCalculator } from '../../lib/geo/distance-calculator';

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

  async createCheckin(createCheckinDto: CreateCheckinDto, userId: string) {
    const worksite = await this.prisma.worksite.findUnique({
      where: { id: createCheckinDto.worksiteId },
    });

    if (!worksite) {
      throw new NotFoundException('Worksite not found');
    }

    const distance = DistanceCalculator.calculateDistance(
      createCheckinDto.latitude,
      createCheckinDto.longitude,
      Number(worksite.latitude),
      Number(worksite.longitude),
    );

    if (distance > worksite.radius) {
      throw new BadRequestException(
        `You are ${Math.round(distance)}m away from the worksite. Maximum allowed distance is ${worksite.radius}m`,
      );
    }

    return this.prisma.checkin.create({
      data: {
        ...createCheckinDto,
        userId,
        distance,
      },
    });
  }

  async getUserHistory(userId: string) {
    return this.prisma.checkin.findMany({
      where: { userId },
      include: { worksite: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}