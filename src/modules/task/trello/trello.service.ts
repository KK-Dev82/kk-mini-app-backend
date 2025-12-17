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

  async createCard(listId: string, name: string, desc?: string, memberIds?: string[], startDate?: string, dueDate?: string, projectTag?: string) {
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

  async updateCard(cardId: string, updates: { listId?: string; name?: string; desc?: string; startDate?: string; dueDate?: string }) {
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