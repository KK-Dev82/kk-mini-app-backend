import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TaskService } from './task.service';
import { TaskResponseDto } from './dto/task-response.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('my-tasks')
  @ApiOperation({ summary: 'Get user assigned tasks' })
  @ApiResponse({ status: 200, description: 'User tasks retrieved', type: [TaskResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async getMyTasks(@Request() req) {
    return this.taskService.findByUserId(req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'All tasks retrieved', type: [TaskResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async getAllTasks() {
    return this.taskService.findAll();
  }
}