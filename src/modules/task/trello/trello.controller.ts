import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TrelloService } from './trello.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto, MoveCardDto } from '../dto/update-card.dto';
import { TrelloBoardDto, TrelloListDto, TrelloCardDto, TrelloMemberDto } from '../dto/trello-response.dto';
import { ConfigService } from '@nestjs/config';
import { ProjectService } from '../../project/project.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskService } from '../task.service';
import { ModuleRef } from '@nestjs/core';

@ApiTags('Trello')
@Controller('trello')
export class TrelloController {
  constructor(
    private readonly trelloService: TrelloService,
    private readonly configService: ConfigService,
    private readonly projectService: ProjectService,
    private readonly prisma: PrismaService,
    private readonly taskService: TaskService,
    private readonly moduleRef: ModuleRef,
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
  @ApiResponse({ status: 200, description: 'Members retrieved successfully', type: [TrelloMemberDto] })
  async getBoardMembers(@Param('boardId') boardId: string) {
    try {
      return await this.trelloService.getBoardMembers(boardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch members' };
    }
  }

  @Get('members')
  @ApiOperation({ summary: 'Get default board members' })
  @ApiResponse({ status: 200, description: 'Members retrieved successfully', type: [TrelloMemberDto] })
  async getMembers() {
    try {
      return await this.trelloService.getBoardMembers();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch members' };
    }
  }

  @Get('boards')
  @ApiOperation({ summary: 'Get all Trello boards' })
  @ApiResponse({ status: 200, description: 'Boards retrieved successfully', type: [TrelloBoardDto] })
  async getBoards() {
    try {
      return await this.trelloService.getBoards();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch boards' };
    }
  }

  @Get('cards')
  @ApiOperation({ summary: 'Get cards from default board' })
  @ApiResponse({ status: 200, description: 'Cards retrieved successfully', type: [TrelloCardDto] })
  async getCards() {
    try {
      return await this.trelloService.getCards();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch cards' };
    }
  }

  @Get('cards/tag/:tag')
  @ApiOperation({ summary: 'Get cards by project tag' })
  @ApiParam({ name: 'tag', description: 'Project tag (e.g., MOBILE, ECOM)' })
  @ApiResponse({ status: 200, description: 'Cards filtered by tag successfully', type: [TrelloCardDto] })
  async getCardsByTag(@Param('tag') tag: string) {
    try {
      return await this.trelloService.getCardsByTag(tag);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch cards by tag' };
    }
  }

  @Get('lists')
  @ApiOperation({ summary: 'Get lists from default board' })
  @ApiResponse({ status: 200, description: 'Lists retrieved successfully', type: [TrelloListDto] })
  async getLists() {
    try {
      return await this.trelloService.getBoardLists();
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch lists' };
    }
  }

  @Get('boards/:boardId/lists')
  @ApiOperation({ summary: 'Get lists from a board' })
  @ApiParam({ name: 'boardId', description: 'Trello board ID' })
  @ApiResponse({ status: 200, description: 'Lists retrieved successfully', type: [TrelloListDto] })
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
  @ApiResponse({ status: 200, description: 'Cards retrieved successfully', type: [TrelloCardDto] })
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
  @ApiResponse({ status: 200, description: 'Card retrieved successfully', type: TrelloCardDto })
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
  @ApiOperation({ 
    summary: 'Create new Trello card (Single Source of Truth)',
    description: `Create Trello card only. No database task creation needed.
    
    **Phase Integration:** Use trelloListId from phase configuration.
    **Project Integration:** Project tag will be added to card name.`
  })
  @ApiResponse({ status: 201, description: 'Card created successfully', type: TrelloCardDto })
  async createCard(@Body() createCardDto: CreateCardDto) {
    try {
      // Get project tag if projectId is provided
      let projectTag: string | undefined;
      if (createCardDto.projectId) {
        const project = await this.projectService.findById(createCardDto.projectId);
        projectTag = project?.trelloTag;
      }

      // Create the card in Trello
      const card = await this.trelloService.createCard(
        createCardDto.listId, 
        createCardDto.name, 
        createCardDto.desc,
        createCardDto.memberIds,
        createCardDto.startDate,
        createCardDto.dueDate,
        projectTag,
        createCardDto.priority
      );

      // Add checklist if provided
      if (createCardDto.checklistItems && createCardDto.checklistItems.length > 0) {
        const checklist = await this.trelloService.createChecklist(card.id, 'ขั้นตอนการทำงาน');
        
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

  @Post('cards/:cardId/unassign')
  @ApiOperation({ summary: 'Unassign member from card' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Member unassigned successfully' })
  async unassignMember(@Param('cardId') cardId: string, @Body() body: { memberId: string }) {
    try {
      return await this.trelloService.unassignMemberFromCard(cardId, body.memberId);
    } catch (error) {
      return { error: error.message, details: 'Failed to unassign member' };
    }
  }

  @Put('cards/:cardId/members')
  @ApiOperation({ summary: 'Update card members (replace all members)' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card members updated successfully' })
  async updateCardMembers(@Param('cardId') cardId: string, @Body() body: { memberIds: string[] }) {
    try {
      return await this.trelloService.updateCardMembers(cardId, body.memberIds);
    } catch (error) {
      return { error: error.message, details: 'Failed to update card members' };
    }
  }

  @Put('cards/:cardId')
  @ApiOperation({ summary: 'Update card details' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card updated successfully', type: TrelloCardDto })
  async updateCard(@Param('cardId') cardId: string, @Body() updateCardDto: UpdateCardDto) {
    try {
      return await this.trelloService.updateCard(cardId, updateCardDto);
    } catch (error) {
      return { error: error.message, details: 'Failed to update card' };
    }
  }

  @Get('phases/:phaseId/cards')
  @ApiOperation({ 
    summary: 'Get cards from phase (via trelloListId)',
    description: 'Get Trello cards directly from phase\'s linked Trello list'
  })
  @ApiParam({ name: 'phaseId', description: 'Phase ID' })
  @ApiResponse({ status: 200, description: 'Phase cards retrieved successfully' })
  async getPhaseCards(@Param('phaseId') phaseId: string) {
    try {
      // Get phase with trelloListId
      const phase = await this.prisma.projectPhase.findUnique({
        where: { id: phaseId },
        select: { trelloListId: true }
      });
      
      if (!phase?.trelloListId) {
        return { error: 'Phase not linked to Trello list' };
      }
      
      return await this.trelloService.getCardsFromList(phase.trelloListId);
    } catch (error) {
      return { error: error.message, details: 'Failed to fetch phase cards' };
    }
  }

  @Put('cards/:cardId/phase')
  @ApiOperation({ 
    summary: 'Assign card to phase and create task',
    description: `Assign Trello card to phase and automatically create task in database.
    
    **Single Flow:**
    1. Update card description with phase info
    2. Create task record in database
    3. Return both Trello card and created task`
  })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card assigned to phase and task created successfully' })
  async assignCardToPhase(
    @Param('cardId') cardId: string,
    @Body() body: { phaseId: string }
  ) {
    try {
      // Assign card to phase in Trello
      const trelloResult = await this.trelloService.assignCardToPhase(cardId, body.phaseId);
      
      // Create task in database
      const task = await this.taskService.createTaskFromCard(cardId, body.phaseId);
      
      return {
        trelloCard: trelloResult,
        task: task,
        message: 'Card assigned to phase and task created successfully'
      };
    } catch (error) {
      return { error: error.message, details: 'Failed to assign card to phase and create task' };
    }
  }

  @Delete('cards/:cardId/phase')
  @ApiOperation({ 
    summary: 'Remove card from phase',
    description: 'Remove manual phase assignment. Card will fall back to automatic date-based assignment.'
  })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card removed from phase successfully' })
  async removeCardFromPhase(@Param('cardId') cardId: string) {
    try {
      return await this.trelloService.removeCardFromPhase(cardId);
    } catch (error) {
      return { error: error.message, details: 'Failed to remove card from phase' };
    }
  }

  @Post('cards/:cardId/move')
  @ApiOperation({ summary: 'Move card to different list (e.g., todos → doing → done)' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiResponse({ status: 200, description: 'Card moved successfully', type: TrelloCardDto })
  async moveCard(@Param('cardId') cardId: string, @Body() moveCardDto: MoveCardDto) {
    try {
      return await this.trelloService.moveCardToList(cardId, moveCardDto.listId);
    } catch (error) {
      return { error: error.message, details: 'Failed to move card' };
    }
  }

  @Put('cards/:cardId/checklist/:checkItemId')
  @ApiOperation({ summary: 'Update checklist item state (complete/incomplete)' })
  @ApiParam({ name: 'cardId', description: 'Trello card ID' })
  @ApiParam({ name: 'checkItemId', description: 'Checklist item ID' })
  @ApiResponse({ status: 200, description: 'Checklist item updated successfully' })
  async updateChecklistItem(
    @Param('cardId') cardId: string,
    @Param('checkItemId') checkItemId: string,
    @Body() body: { state: 'complete' | 'incomplete' }
  ) {
    try {
      return await this.trelloService.updateChecklistItem(cardId, checkItemId, body.state);
    } catch (error) {
      return { error: error.message, details: 'Failed to update checklist item' };
    }
  }
}