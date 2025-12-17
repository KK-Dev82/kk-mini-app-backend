import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateWorksiteDto } from './dto/create-worksite.dto';
import { UpdateWorksiteDto } from './dto/update-worksite.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async createWorksite(createWorksiteDto: CreateWorksiteDto) {
    return this.prisma.worksite.create({
      data: {
        name: createWorksiteDto.name,
        description: createWorksiteDto.description,
        latitude: createWorksiteDto.latitude,
        longitude: createWorksiteDto.longitude,
        radius: createWorksiteDto.radius || 500,
      },
    });
  }

  async getWorksites() {
    return this.prisma.worksite.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateWorksite(id: string, updateWorksiteDto: UpdateWorksiteDto) {
    const worksite = await this.prisma.worksite.findUnique({ where: { id } });
    if (!worksite) {
      throw new NotFoundException('Worksite not found');
    }

    return this.prisma.worksite.update({
      where: { id },
      data: updateWorksiteDto,
    });
  }

  async deactivateWorksite(id: string) {
    const worksite = await this.prisma.worksite.findUnique({ where: { id } });
    if (!worksite) {
      throw new NotFoundException('Worksite not found');
    }

    return this.prisma.worksite.update({
      where: { id },
      data: { isActive: false },
    });
  }
}