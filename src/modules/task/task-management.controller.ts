import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TaskManagementService } from './task-management.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Task Management')
@Controller('tasks')
export class TaskManagementController {
  constructor(private readonly taskService: TaskManagementService) {}

  @Post()
  @ApiOperation({ summary: 'Create new task with optional phase assignment' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch(':id/assign-phase')
  @ApiOperation({ 
    summary: 'Assign task to phase',
    description: `Move a task to specific phase. Task will inherit projectId from phase if not set.
    
    **URL Parameter:** id = Task ID
    **Body:** { "phaseId": "phase_id_here" }
    
    **Use case:** Organize tasks into project phases for better sprint management`
  })
  @ApiParam({ name: 'id', description: 'Task ID to assign to phase' })
  @ApiResponse({ 
    status: 200, 
    description: 'Task assigned to phase successfully',
    schema: {
      example: {
        "id": "task_id",
        "title": "Task Title",
        "phaseId": "phase_id",
        "projectId": "project_id",
        "phase": { "id": "phase_id", "name": "Phase Name" },
        "project": { "id": "project_id", "name": "Project Name" }
      }
    }
  })
  async assignToPhase(
    @Param('id') taskId: string,
    @Body() body: { phaseId: string }
  ) {
    return this.taskService.assignToPhase(taskId, body.phaseId);
  }

  @Patch(':id/remove-phase')
  @ApiOperation({ 
    summary: 'Remove task from phase',
    description: `Remove task from its current phase. Task will become unassigned to any phase.
    
    **URL Parameter:** id = Task ID
    **No body required**
    
    **Use case:** Move task back to general task pool`
  })
  @ApiParam({ name: 'id', description: 'Task ID to remove from phase' })
  @ApiResponse({ 
    status: 200, 
    description: 'Task removed from phase successfully',
    schema: {
      example: {
        "id": "task_id",
        "title": "Task Title",
        "phaseId": null,
        "projectId": "project_id",
        "phase": null
      }
    }
  })
  async removeFromPhase(@Param('id') taskId: string) {
    return this.taskService.removeFromPhase(taskId);
  }
}