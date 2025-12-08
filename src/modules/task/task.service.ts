import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.task.findMany({
      where: { assignedUserId: userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async syncFromTrello(trelloData: any) {
    const existingTask = await this.prisma.task.findFirst({
      where: { trelloCardId: trelloData.id },
    });

    if (existingTask) {
      return this.prisma.task.update({
        where: { id: existingTask.id },
        data: {
          title: trelloData.name,
          description: trelloData.desc,
        },
      });
    }

    return this.prisma.task.create({
      data: {
        trelloCardId: trelloData.id,
        title: trelloData.name,
        description: trelloData.desc,
      },
    });
  }
}