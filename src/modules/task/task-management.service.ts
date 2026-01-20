import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TaskPriority } from '@prisma/client';

@Injectable()
export class TaskManagementService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: {
    title: string;
    description?: string;
    projectId?: string;
    phaseId?: string;
    assignedUserId?: string;
    dueDate?: string;
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  }) {
    let projectId = data.projectId;
    
    // Auto-inherit projectId from phase if not provided
    if (data.phaseId && !projectId) {
      const phase = await this.prisma.projectPhase.findUnique({
        where: { id: data.phaseId },
        select: { projectId: true },
      });
      if (!phase) {
        throw new NotFoundException('Phase not found');
      }
      projectId = phase.projectId;
    }

    // Generate fake trelloCardId for now
    const trelloCardId = `local-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return this.prisma.task.create({
      data: {
        trelloCardId,
        title: data.title,
        description: data.description,
        projectId,
        phaseId: data.phaseId,
        assignedUserId: data.assignedUserId,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        priority: data.priority as TaskPriority || 'MEDIUM',
      },
      include: {
        project: true,
        phase: true,
        assignedUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async assignToPhase(taskId: string, phaseId: string) {
    // Validate phase exists
    const phase = await this.prisma.projectPhase.findUnique({
      where: { id: phaseId },
    });
    if (!phase) {
      throw new NotFoundException('Phase not found');
    }

    return this.prisma.task.update({
      where: { id: taskId },
      data: { phaseId },
      include: {
        project: true,
        phase: true,
        assignedUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async removeFromPhase(taskId: string) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: { phaseId: null },
      include: {
        project: true,
        phase: true,
        assignedUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async getTasksByPhase(phaseId: string) {
    return this.prisma.task.findMany({
      where: { phaseId },
      include: {
        assignedUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}