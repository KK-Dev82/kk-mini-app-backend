import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TrelloService } from './trello.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto, MoveCardDto } from '../dto/update-card.dto';
import { ConfigService } from '@nestjs/config';

@ApiTags('Trello')
@Controller('trello')
export class TrelloController {
  constructor(
    private readonly trelloService: TrelloService,
    private readonly configService: ConfigService,
  ) {}

  @Get('config')
  @ApiOperation({ summary: 'Check Trello config' })
  async getConfig() {
    return {
      apiKey: this.configService.get('trello.apiKey') ? 'Set' : 'Not set',
      token: this.configService.get('trello.token') ? 'Set' : 'Not set',
      boardId: this.configService.get('trello.boardId') || 'Not set',
    };
  }

  @Get('boards/:boardId/members')
  @ApiOperation({ summary: 'Get board members' })
  @ApiParam({ name: 'boardId', description: 'Trello board ID' })
  @ApiResponse({ status: 200, description: 'Members retrieved successfully' })
  async getBoardMembers(@Param('boardId') boardId: string) {
    try {
      return await this.trelloService.getBoardMembers(boardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch members' };
    }
  }

  @Get('members')
  @ApiOperation({ summary: 'Get default board members' })
  @ApiResponse({ status: 200, description: 'Members retrieved successfully' })
  async getMembers() {
    try {
      return await this.trelloService.getBoardMembers();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch members' };
    }
  }

  @Get('boards')
  @ApiOperation({ summary: 'Get all Trello boards' })
  @ApiResponse({ status: 200, description: 'Boards retrieved successfully' })
  async getBoards() {
    try {
      return await this.trelloService.getBoards();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch boards' };
    }
  }

  @Get('cards')
  @ApiOperation({ summary: 'Get cards from default board' })
  @ApiResponse({ status: 200, description: 'Cards retrieved successfully' })
  async getCards() {
    try {
      return await this.trelloService.getCards();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch cards' };
    }
  }

  @Get('boards/:boardId/lists')
  @ApiOperation({ summary: 'Get lists from a board' })
  @ApiParam({ name: 'boardId', description: 'Trello board ID' })
  @ApiResponse({ status: 200, description: 'Lists retrieved successfully' })
  async getBoardLists(@Param('boardId') boardId: string) {
    try {
      return await this.trelloService.getBoardLists(boardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch lists' };
    }
  }

  @Get('boards/:boardId/cards')
  @ApiOperation({ summary: 'Get cards from a board' })
  @ApiParam({ name: 'boardId', description: 'Trello board ID' })
  @ApiResponse({ status: 200, description: 'Cards retrieved successfully' })
  async getBoardCards(@Param('boardId') boardId: string) {
    try {
      return await this.trelloService.getCards(boardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch cards' };
    }
  }

  @Get('cards/:cardId')
  @ApiOperation({ summary: 'Get specific card details with checklists' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card retrieved successfully' })
  async getCard(@Param('cardId') cardId: string) {
    try {
      return await this.trelloService.getCard(cardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch card' };
    }
  }

  @Get('checklist/:checklistId')
  @ApiOperation({ summary: 'Get checklist details' })
  @ApiParam({ name: 'checklistId', description: 'Trello checklist ID' })
  @ApiResponse({ status: 200, description: 'Checklist retrieved successfully' })
  async getChecklist(@Param('checklistId') checklistId: string) {
    try {
      return await this.trelloService.getChecklist(checklistId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch checklist' };
    }
  }

  @Post('cards')
  @ApiOperation({ summary: 'Create new card with optional assignees, due date, and checklist' })
  @ApiResponse({ status: 201, description: 'Card created successfully' })
  async createCard(@Body() createCardDto: CreateCardDto) {
    try {
      // Create the card first
      const card = await this.trelloService.createCard(
        createCardDto.listId, 
        createCardDto.name, 
        createCardDto.desc,
        createCardDto.memberIds,
        createCardDto.dueDate
      );

      // Add checklist if provided
      if (createCardDto.checklistItems && createCardDto.checklistItems.length > 0) {
        const checklist = await this.trelloService.createChecklist(card.id, 'ขั้นตอนการทำงาน');
        
        // Add each checklist item
        for (const item of createCardDto.checklistItems) {
          await this.trelloService.addChecklistItem(checklist.id, item);
        }
      }

      return card;
    } catch (error) {
      return { error: error.message, details: 'Failed to create card' };
    }
  }

  @Post('cards/:cardId/assign')
  @ApiOperation({ summary: 'Assign member to card' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Member assigned successfully' })
  async assignMember(@Param('cardId') cardId: string, @Body() body: { memberId: string }) {
    try {
      return await this.trelloService.assignMemberToCard(cardId, body.memberId);
    } catch (error) {
      return { error: error.message, details: 'Failed to assign member' };
    }
  }

  @Put('cards/:cardId')
  @ApiOperation({ summary: 'Update card details' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card updated successfully' })
  async updateCard(@Param('cardId') cardId: string, @Body() updateCardDto: UpdateCardDto) {
    try {
      return await this.trelloService.updateCard(cardId, updateCardDto);
    } catch (error) {
      return { error: error.message, details: 'Failed to update card' };
    }
  }

  @Post('cards/:cardId/move')
  @ApiOperation({ summary: 'Move card to different list (e.g., todos → doing → done)' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card moved successfully' })
  async moveCard(@Param('cardId') cardId: string, @Body() moveCardDto: MoveCardDto) {
    try {
      return await this.trelloService.moveCardToList(cardId, moveCardDto.listId);
    } catch (error) {
      return { error: error.message, details: 'Failed to move card' };
    }
  }
}