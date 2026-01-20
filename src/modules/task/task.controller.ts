import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create-from-card')
  @ApiOperation({ summary: 'Create task from Trello card when assigned to phase' })
  @ApiResponse({ status: 200, description: 'Task created successfully' })
  async createFromCard(@Body() body: { cardId: string; phaseId: string }) {
    return this.taskService.createTaskFromCard(body.cardId, body.phaseId);
  }

  @Get('phase/:phaseId')
  @ApiOperation({ summary: 'Get tasks by phase ID' })
  async getTasksByPhase(@Param('phaseId') phaseId: string) {
    return this.taskService.getTasksByPhase(phaseId);
  }
}