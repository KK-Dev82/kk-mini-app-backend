import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TrelloService } from './trello/trello.service';
import { TaskStatus, TaskPriority } from '@prisma/client';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly trelloService: TrelloService,
  ) {}

  async createTaskFromCard(cardId: string, phaseId: string) {
    try {
      // Get card details from Trello
      const card = await this.trelloService.getCard(cardId);
      
      // Get phase details
      const phase = await this.prisma.projectPhase.findUnique({
        where: { id: phaseId },
        include: { project: true }
      });

      if (!phase) {
        throw new Error(`Phase not found: ${phaseId}`);
      }

      // Check if task already exists
      const existingTask = await this.prisma.task.findFirst({
        where: { trelloCardId: cardId }
      });

      if (existingTask) {
        // Update existing task with new phase
        return this.prisma.task.update({
          where: { id: existingTask.id },
          data: {
            phaseId,
            projectId: phase.projectId,
            updatedAt: new Date()
          }
        });
      }

      // Extract priority from labels
      const priority = this.extractPriority(card.labels);
      
      // Map Trello list to task status
      const status = this.mapListToStatus(card.listName);

      // Create new task
      const task = await this.prisma.task.create({
        data: {
          trelloCardId: cardId,
          title: card.name,
          description: card.desc || '',
          status,
          priority,
          projectId: phase.projectId,
          phaseId,
          startDate: card.start ? new Date(card.start) : null,
          dueDate: card.due ? new Date(card.due) : null,
        }
      });

      this.logger.log(`Created task from card ${cardId} for phase ${phaseId}`);
      return task;

    } catch (error) {
      this.logger.error(`Failed to create task from card ${cardId}`, error);
      throw error;
    }
  }

  async getTasksByPhase(phaseId: string) {
    return this.prisma.task.findMany({
      where: { phaseId },
      include: {
        assignedUser: {
          select: { id: true, name: true, email: true, picture: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  private extractPriority(labels: any[]): TaskPriority {
    if (!labels || labels.length === 0) return TaskPriority.MEDIUM;

    for (const label of labels) {
      const name = label.name?.toLowerCase() || '';
      if (name.includes('critical')) return TaskPriority.CRITICAL;
      if (name.includes('high')) return TaskPriority.HIGH;
      if (name.includes('low')) return TaskPriority.LOW;
    }
    
    return TaskPriority.MEDIUM;
  }

  private mapListToStatus(listName: string): TaskStatus {
    const name = listName?.toLowerCase() || '';
    
    if (name.includes('progress') || name.includes('doing')) {
      return TaskStatus.IN_PROGRESS;
    }
    if (name.includes('done') || name.includes('complete')) {
      return TaskStatus.DONE;
    }
    
    return TaskStatus.TODO;
  }
}