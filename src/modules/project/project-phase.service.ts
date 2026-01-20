import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProjectPhaseDto, UpdateProjectPhaseDto } from './dto/project-phase.dto';
import { TrelloService } from '../task/trello/trello.service';

@Injectable()
export class ProjectPhaseService {
  constructor(
    private prisma: PrismaService,
    private trelloService: TrelloService,
  ) {}

  async create(projectId: string, createDto: CreateProjectPhaseDto) {
    return this.prisma.projectPhase.create({
      data: {
        ...createDto,
        startDate: createDto.startDate ? new Date(createDto.startDate) : null,
        dueDate: createDto.dueDate ? new Date(createDto.dueDate) : null,
        deliverDate: createDto.deliverDate ? new Date(createDto.deliverDate) : null,
        projectId,
      },
      include: {
        project: true,
        tasks: true,
      },
    });
  }

  async findByProject(projectId: string) {
    return this.prisma.projectPhase.findMany({
      where: { projectId },
      include: {
        tasks: {
          include: {
            assignedUser: true,
          },
        },
      },
      orderBy: { orderIndex: 'asc' },
    });
  }

  async findOne(id: string, options?: { sprint: number; limit: number }) {
    const { sprint = 1, limit = 50 } = options || {};
    
    const phase = await this.prisma.projectPhase.findUnique({
      where: { id },
      include: {
        project: true,
      },
    });

    if (!phase) {
      throw new NotFoundException('Phase not found');
    }

    // คำนวณ date range สำหรับ sprint (2 weeks)
    const phaseStartDate = phase.startDate ? new Date(phase.startDate) : new Date();
    
    const sprintStartDate = new Date(phaseStartDate);
    sprintStartDate.setDate(phaseStartDate.getDate() + ((sprint - 1) * 14));
    
    const sprintEndDate = new Date(sprintStartDate);
    sprintEndDate.setDate(sprintStartDate.getDate() + 13);

    // ดึง tasks จากฐานข้อมูลที่ถูก assign เข้า phase นี้
    const allTasks = await this.prisma.task.findMany({
      where: { phaseId: id },
      include: {
        assignedUser: {
          select: { id: true, name: true, email: true, picture: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Filter tasks ตาม sprint date range (ถ้ามี due date)
    let tasksInSprint = allTasks.filter(task => {
      if (!task.dueDate) {
        // Tasks ที่ไม่มี due date แสดงใน sprint แรก
        return sprint === 1;
      }
      
      const dueDate = new Date(task.dueDate);
      return dueDate >= sprintStartDate && dueDate <= sprintEndDate;
    });

    // Limit results
    const tasksShown = tasksInSprint.slice(0, limit);
    
    // คำนวณ total sprints
    let totalSprints = 1;
    if (phase.startDate && phase.dueDate) {
      const phaseDurationDays = Math.ceil(
        (new Date(phase.dueDate).getTime() - new Date(phase.startDate).getTime()) / (1000 * 60 * 60 * 24)
      );
      totalSprints = Math.max(1, Math.ceil(phaseDurationDays / 14));
    }

    return {
      ...phase,
      tasks: tasksShown,
      sprint: {
        current: sprint,
        total: totalSprints,
        startDate: sprintStartDate,
        endDate: sprintEndDate,
        tasksInSprint: tasksInSprint.length,
        tasksShown: tasksShown.length,
        totalTasks: allTasks.length,
        hasNext: sprint < totalSprints,
        hasPrev: sprint > 1,
        isLimited: tasksInSprint.length > limit,
      },
    };
  }

  private mapTrelloStatusToTaskStatus(listName: string): string {
    const statusMap = {
      'todo': 'TODO',
      'doing': 'IN_PROGRESS', 
      'done': 'DONE',
      'backlog': 'TODO',
      'in progress': 'IN_PROGRESS',
      'completed': 'DONE'
    };
    return statusMap[listName?.toLowerCase()] || 'TODO';
  }

  private extractPriorityFromLabels(labels: any[]): string {
    const priorityLabel = labels?.find(label => 
      label.name && label.name.toLowerCase().includes('priority')
    );
    if (priorityLabel) {
      const priority = priorityLabel.name.split(':')[1]?.trim();
      return priority || 'MEDIUM';
    }
    return 'MEDIUM';
  }

  async update(id: string, updateDto: UpdateProjectPhaseDto) {
    const phase = await this.findOne(id);

    return this.prisma.projectPhase.update({
      where: { id },
      data: {
        ...updateDto,
        startDate: updateDto.startDate ? new Date(updateDto.startDate) : undefined,
        dueDate: updateDto.dueDate ? new Date(updateDto.dueDate) : undefined,
        deliverDate: updateDto.deliverDate ? new Date(updateDto.deliverDate) : undefined,
      },
      include: {
        project: true,
        tasks: true,
      },
    });
  }

  async remove(id: string) {
    const phase = await this.findOne(id);

    // Check if phase has tasks
    const taskCount = await this.prisma.task.count({
      where: { phaseId: id },
    });

    if (taskCount > 0) {
      throw new Error('Cannot delete phase with existing tasks');
    }

    return this.prisma.projectPhase.delete({
      where: { id },
    });
  }

  async reorderPhases(projectId: string, phaseIds: string[]) {
    const phases = await this.prisma.projectPhase.findMany({
      where: { projectId },
    });

    const updates = phaseIds.map((phaseId, index) => {
      return this.prisma.projectPhase.update({
        where: { id: phaseId },
        data: { orderIndex: index },
      });
    });

    await this.prisma.$transaction(updates);

    return this.findByProject(projectId);
  }
}