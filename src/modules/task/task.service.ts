import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) {}

  async findAll() {
    return [];
  }

  async findByUserId(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { trelloMemberId: true }
    });

    if (!user?.trelloMemberId) {
      return [];
    }

    return this.getTrelloTasksForUser(user.trelloMemberId);
  }

  async syncFromTrello(trelloData: any) {
    return trelloData;
  }

  async getWeeklyTasks(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { trelloMemberId: true }
    });

    if (!user?.trelloMemberId) {
      return [];
    }

    const tasks = await this.getTrelloTasksForUser(user.trelloMemberId);
    
    const now = new Date();
    const weekEnd = new Date(now);
    weekEnd.setDate(now.getDate() + 7);
    
    return tasks.filter(task => {
      if (!task.due) return false;
      const dueDate = new Date(task.due);
      const isWithinWeek = dueDate >= now && dueDate <= weekEnd;
      
      // ไม่แสดง task ที่ checklist complete ทั้งหมด
      const isTaskComplete = this.isTaskComplete(task);
      
      return isWithinWeek && !isTaskComplete;
    });
  }

  private async getTrelloTasksForUser(trelloMemberId: string) {
    const apiKey = this.configService.get('trello.apiKey');
    const token = this.configService.get('trello.token');
    const boardId = this.configService.get('trello.boardId');
    
    try {
      const response = await fetch(
        `https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}&members=true&checklists=all&list=true`
      );
      
      if (!response.ok) {
        throw new Error(`Trello API error: ${response.status}`);
      }
      
      const cards = await response.json();
      
      return cards
        .filter(card => {
          // Filter out cards in Done list
          const isDoneList = card.list?.name === 'เสร็จสิ้น' || card.list?.name === 'Done';
          return card.idMembers.includes(trelloMemberId) && !isDoneList;
        })
        .map(card => ({
          id: card.id,
          title: card.name,
          description: card.desc,
          status: this.mapTrelloStatus(card.list?.name),
          due: card.due,
          url: card.url,
          listName: card.list?.name,
          checklists: card.checklists || []
        }));
    } catch (error) {
      console.error('Error fetching Trello tasks:', error);
      return [];
    }
  }

  private mapTrelloStatus(listName: string): string {
    if (!listName) return 'TODO';
    
    const statusMap = {
      'สิ่งที่ต้องทำ': 'TODO',
      'กำลังดำเนินการ': 'IN_PROGRESS', 
      'เสร็จสิ้น': 'DONE'
    };
    
    return statusMap[listName] || 'TODO';
  }

  private isTaskComplete(task: any): boolean {
    if (!task.checklists || task.checklists.length === 0) {
      return false; // ไม่มี checklist ถือว่ายังไม่เสร็จ
    }

    // เช็คว่าทุก checklist มี checkItems ทั้งหมด complete หรือไม่
    return task.checklists.every(checklist => {
      if (!checklist.checkItems || checklist.checkItems.length === 0) {
        return false; // ไม่มี checkItems ถือว่ายังไม่เสร็จ
      }
      
      return checklist.checkItems.every(item => item.state === 'complete');
    });
  }
}