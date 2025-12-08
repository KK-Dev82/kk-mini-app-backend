import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WorksiteService {
  constructor(private prisma: PrismaService) {}

  async findAllActive() {
    return this.prisma.worksite.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: string) {
    return this.prisma.worksite.findUnique({ where: { id } });
  }
}