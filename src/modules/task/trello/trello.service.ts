import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskPriority } from '@prisma/client';

@Injectable()
export class TrelloService {
  private readonly apiKey: string;
  private readonly token: string;
  private readonly boardId: string;

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    private prisma: PrismaService,
  ) {
    this.apiKey = this.configService.get('trello.apiKey') || '';
    this.token = this.configService.get('trello.token') || '';
    this.boardId = this.configService.get('trello.boardId') || '';
  }

  private getAuthParams() {
    return {
      key: this.apiKey,
      token: this.token,
    };
  }

  async getBoards() {
    const url = 'https://api.trello.com/1/members/me/boards';
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data.map(board => ({
      id: board.id,
      name: board.name,
      shortLink: board.shortLink,
      url: board.url
    }));
  }

  async getBoardLists(boardId?: string) {
    const id = boardId || this.boardId;
    const url = `https://api.trello.com/1/boards/${id}/lists`;
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data.map(list => ({
      id: list.id,
      name: list.name,
      pos: list.pos,
      closed: list.closed
    }));
  }

  async getCardsByTag(tag: string, boardId?: string) {
    const cards = await this.getCards(boardId);
    return cards.filter(card => card.name.includes(`[${tag}]`));
  }

  async getCards(boardId?: string) {
    const id = boardId || this.boardId;
    
    // Get lists first to map list names
    const lists = await this.getBoardLists(id);
    const listMap = new Map(lists.map(list => [list.id, list]));
    
    const url = `https://api.trello.com/1/boards/${id}/cards`;
    const params = {
      ...this.getAuthParams(),
      checklists: 'all'
    };
    const response = await firstValueFrom(
      this.httpService.get(url, { params })
    );
    
    return response.data.map(card => {
      const list = listMap.get(card.idList) as any;
      return {
        id: card.id,
        name: card.name,
        desc: card.desc,
        idList: card.idList,
        listName: list?.name || 'Unknown',
        pos: card.pos,
        closed: card.closed,
        start: card.start,
        due: card.due,
        dueComplete: card.dueComplete,
        idMembers: card.idMembers,
        labels: card.labels?.map(label => ({
          id: label.id,
          name: label.name,
          color: label.color
        })) || [],
        checklists: card.checklists?.map(checklist => ({
          id: checklist.id,
          name: checklist.name,
          checkItems: checklist.checkItems?.map(item => ({
            id: item.id,
            name: item.name,
            state: item.state,
            pos: item.pos
          })) || []
        })) || [],
        badges: {
          checkItems: card.badges?.checkItems || 0,
          checkItemsChecked: card.badges?.checkItemsChecked || 0,
          comments: card.badges?.comments || 0,
          attachments: card.badges?.attachments || 0
        },
        shortLink: card.shortLink,
        url: card.url
      };
    });
  }



  async getCard(cardId: string) {
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const params = {
      ...this.getAuthParams(),
      checklists: 'all',
    };
    const response = await firstValueFrom(
      this.httpService.get(url, { params })
    );
    const card = response.data;
    
    // Get list information
    const lists = await this.getBoardLists(card.idBoard);
    const list = lists.find(l => l.id === card.idList) as any;
    
    return {
      id: card.id,
      name: card.name,
      desc: card.desc,
      idList: card.idList,
      listName: list?.name || 'Unknown',
      pos: card.pos,
      closed: card.closed,
      start: card.start,
      due: card.due,
      dueComplete: card.dueComplete,
      idMembers: card.idMembers,
      labels: card.labels?.map(label => ({
        id: label.id,
        name: label.name,
        color: label.color
      })) || [],
      checklists: card.checklists?.map(checklist => ({
        id: checklist.id,
        name: checklist.name,
        checkItems: checklist.checkItems?.map(item => ({
          id: item.id,
          name: item.name,
          state: item.state,
          pos: item.pos
        })) || []
      })) || [],
      shortLink: card.shortLink,
      url: card.url
    };
  }

  async getChecklist(checklistId: string) {
    const url = `https://api.trello.com/1/checklists/${checklistId}`;
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data;
  }

  async getBoardMembers(boardId?: string) {
    const id = boardId || this.boardId;
    const url = `https://api.trello.com/1/boards/${id}/members`;
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data.map(member => ({
      id: member.id,
      username: member.username,
      fullName: member.fullName,
      avatarUrl: member.avatarUrl,
      initials: member.initials
    }));
  }

  async createCard(listId: string, name: string, desc?: string, memberIds?: string[], startDate?: string, dueDate?: string, projectTag?: string, priority?: string) {
    // Add project tag to card name if provided
    const cardName = projectTag ? `[${projectTag}] ${name}` : name;
    const url = 'https://api.trello.com/1/cards';
    const data = {
      ...this.getAuthParams(),
      idList: listId,
      name: cardName,
      desc,
      ...(memberIds && memberIds.length > 0 && { idMembers: memberIds.join(',') }),
      ...(startDate && { start: startDate }),
      ...(dueDate && { due: dueDate }),
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
    
    // Add priority label if provided
    if (priority) {
      await this.addPriorityLabel(response.data.id, priority);
    }
    
    return response.data;
  }

  async createChecklist(cardId: string, name: string) {
    const url = 'https://api.trello.com/1/checklists';
    const data = {
      ...this.getAuthParams(),
      idCard: cardId,
      name,
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
    return response.data;
  }

  async addChecklistItem(checklistId: string, name: string) {
    const url = `https://api.trello.com/1/checklists/${checklistId}/checkItems`;
    const data = {
      ...this.getAuthParams(),
      name,
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
    return response.data;
  }

  async updateCard(cardId: string, updates: { listId?: string; name?: string; desc?: string; startDate?: string; dueDate?: string; priority?: string }) {
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const data = {
      ...this.getAuthParams(),
      ...(updates.listId && { idList: updates.listId }),
      ...(updates.name && { name: updates.name }),
      ...(updates.desc && { desc: updates.desc }),
      ...(updates.startDate && { start: updates.startDate }),
      ...(updates.dueDate && { due: updates.dueDate }),
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
    
    // Update priority label if provided
    if (updates.priority) {
      await this.updatePriorityLabel(cardId, updates.priority);
    }
    
    return response.data;
  }

  async moveCardToList(cardId: string, listId: string) {
    return this.updateCard(cardId, { listId });
  }

  async assignMemberToCard(cardId: string, memberId: string) {
    const url = `https://api.trello.com/1/cards/${cardId}/idMembers`;
    const data = {
      ...this.getAuthParams(),
      value: memberId,
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
    return response.data;
  }

  async updateChecklistItem(cardId: string, checkItemId: string, state: 'complete' | 'incomplete') {
    const url = `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}`;
    const data = {
      ...this.getAuthParams(),
      state,
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
    return response.data;
  }

  private async addPriorityLabel(cardId: string, priority: string) {
    const labelColor = this.getPriorityColor(priority);
    const url = `https://api.trello.com/1/cards/${cardId}/labels`;
    const data = {
      ...this.getAuthParams(),
      color: labelColor,
      name: `Priority: ${priority}`,
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
    return response.data;
  }

  private async updatePriorityLabel(cardId: string, priority: string) {
    // Remove existing priority labels first
    await this.removePriorityLabels(cardId);
    // Add new priority label
    return this.addPriorityLabel(cardId, priority);
  }

  private async removePriorityLabels(cardId: string) {
    const card = await this.getCard(cardId);
    const priorityLabels = card.labels.filter(label => 
      label.name && label.name.startsWith('Priority:')
    );
    
    for (const label of priorityLabels) {
      const url = `https://api.trello.com/1/cards/${cardId}/idLabels/${label.id}`;
      await firstValueFrom(
        this.httpService.delete(url, { params: this.getAuthParams() })
      );
    }
  }

  async unassignMemberFromCard(cardId: string, memberId: string) {
    const url = `https://api.trello.com/1/cards/${cardId}/idMembers/${memberId}`;
    const response = await firstValueFrom(
      this.httpService.delete(url, { params: this.getAuthParams() })
    );
    return response.data;
  }

  async updateCardMembers(cardId: string, memberIds: string[]) {
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const data = {
      ...this.getAuthParams(),
      idMembers: memberIds.join(',')
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
    return response.data;
  }

  async assignCardToPhase(cardId: string, phaseId: string) {
    // เพิ่ม custom field หรือ label เพื่อ track manual phase assignment
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const data = {
      ...this.getAuthParams(),
      desc: await this.updateCardDescriptionWithPhase(cardId, phaseId)
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
    
    // TODO: Create cardPhaseAssignment table first
    // await this.prisma.cardPhaseAssignment.upsert({
    //   where: { cardId },
    //   update: { phaseId, isManual: true },
    //   create: { cardId, phaseId, isManual: true }
    // });
    
    return response.data;
  }

  async removeCardFromPhase(cardId: string) {
    // TODO: Create cardPhaseAssignment table first
    // await this.prisma.cardPhaseAssignment.deleteMany({
    //   where: { cardId }
    // });
    
    // อัปเดต card description
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const data = {
      ...this.getAuthParams(),
      desc: await this.removePhaseFromCardDescription(cardId)
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
    
    return response.data;
  }

  private async updateCardDescriptionWithPhase(cardId: string, phaseId: string): Promise<string> {
    const card = await this.getCard(cardId);
    const phase = await this.prisma.projectPhase.findUnique({
      where: { id: phaseId },
      select: { name: true }
    });
    
    let desc = card.desc || '';
    // ลบ phase tag เก่า (ถ้ามี)
    desc = desc.replace(/\[PHASE:.*?\]/g, '').trim();
    // เพิ่ม phase tag ใหม่
    desc = `[PHASE:${phase?.name}] ${desc}`.trim();
    
    return desc;
  }

  private async removePhaseFromCardDescription(cardId: string): Promise<string> {
    const card = await this.getCard(cardId);
    let desc = card.desc || '';
    // ลบ phase tag
    desc = desc.replace(/\[PHASE:.*?\]/g, '').trim();
    return desc;
  }

  private getPriorityColor(priority: string): string {
    const colorMap = {
      'CRITICAL': 'red',
      'HIGH': 'orange', 
      'MEDIUM': 'yellow',
      'LOW': 'green'
    };
    return colorMap[priority] || 'yellow';
  }

  async createTaskFromCard(data: {
    trelloCardId: string;
    title: string;
    description?: string;
    projectId?: string;
    phaseId?: string;
    dueDate?: string;
    priority?: TaskPriority;
  }) {
    // ไม่ต้องสร้าง Task ใน database แล้ว - ใช้ Trello เป็น single source
    return { message: 'Using Trello as single source of truth' };
  }

  async getCardsFromList(listId: string) {
    const url = `https://api.trello.com/1/lists/${listId}/cards`;
    const params = {
      ...this.getAuthParams(),
      fields: 'all',
      members: 'true',
      labels: 'true'
    };
    const response = await firstValueFrom(
      this.httpService.get(url, { params })
    );
    
    return response.data.map(card => ({
      id: card.id,
      name: card.name,
      desc: card.desc,
      idList: card.idList,
      listName: card.list?.name || 'Unknown',
      due: card.due,
      start: card.start,
      dateLastActivity: card.dateLastActivity,
      idMembers: card.idMembers,
      members: card.members || [],
      labels: card.labels || [],
      url: card.url,
      shortLink: card.shortLink
    }));
  }
}