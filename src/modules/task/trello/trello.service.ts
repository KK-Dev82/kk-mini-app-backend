import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TrelloService {
  private readonly apiKey: string;
  private readonly token: string;
  private readonly boardId: string;

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
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
    return response.data;
  }

  async getBoardLists(boardId?: string) {
    const id = boardId || this.boardId;
    const url = `https://api.trello.com/1/boards/${id}/lists`;
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data;
  }

  async getCards(boardId?: string) {
    const id = boardId || this.boardId;
    const url = `https://api.trello.com/1/boards/${id}/cards`;
    const response = await firstValueFrom(
      this.httpService.get(url, { params: this.getAuthParams() })
    );
    return response.data;
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
    return response.data;
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
    return response.data;
  }

  async createCard(listId: string, name: string, desc?: string, memberIds?: string[], dueDate?: string) {
    const url = 'https://api.trello.com/1/cards';
    const data = {
      ...this.getAuthParams(),
      idList: listId,
      name,
      desc,
      ...(memberIds && memberIds.length > 0 && { idMembers: memberIds.join(',') }),
      ...(dueDate && { due: dueDate }),
    };
    const response = await firstValueFrom(
      this.httpService.post(url, data)
    );
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

  async updateCard(cardId: string, updates: { listId?: string; name?: string; desc?: string }) {
    const url = `https://api.trello.com/1/cards/${cardId}`;
    const data = {
      ...this.getAuthParams(),
      ...(updates.listId && { idList: updates.listId }),
      ...(updates.name && { name: updates.name }),
      ...(updates.desc && { desc: updates.desc }),
    };
    const response = await firstValueFrom(
      this.httpService.put(url, data)
    );
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
}