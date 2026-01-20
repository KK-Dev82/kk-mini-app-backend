import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProjectPhaseService } from './project-phase.service';
import { CreateProjectPhaseDto, UpdateProjectPhaseDto } from './dto/project-phase.dto';
import { ReorderPhasesDto } from './dto/reorder-phases.dto';

@ApiTags('Project Phases')
@Controller('projects/:projectId/phases')
export class ProjectPhaseController {
  constructor(private readonly phaseService: ProjectPhaseService) {}

  @Post()
  @ApiOperation({ summary: 'Create new project phase' })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiResponse({ status: 201, description: 'Phase created successfully' })
  async create(
    @Param('projectId') projectId: string,
    @Body() createDto: CreateProjectPhaseDto,
  ) {
    return this.phaseService.create(projectId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all phases for project' })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiResponse({ status: 200, description: 'Phases retrieved successfully' })
  async findByProject(@Param('projectId') projectId: string) {
    return this.phaseService.findByProject(projectId);
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get phase by ID with sprint-based tasks',
    description: 'Get tasks in specific sprint (2 weeks). Use limit to control max tasks per sprint.'
  })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiParam({ name: 'id', description: 'Phase ID' })
  @ApiQuery({ name: 'sprint', description: 'Sprint number (default: 1)', required: false })
  @ApiQuery({ name: 'limit', description: 'Max tasks per sprint (default: 50)', required: false })
  @ApiResponse({ status: 200, description: 'Phase retrieved successfully' })
  async findOne(
    @Param('id') id: string,
    @Query('sprint') sprint: string = '1',
    @Query('limit') limit: string = '50',
  ) {
    return this.phaseService.findOne(id, {
      sprint: parseInt(sprint),
      limit: parseInt(limit),
    });
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Update project phase',
    description: `Update phase details. All fields are optional.
    
    **Available fields:**
    - name: Phase name
    - description: Phase description  
    - status: Phase status (NOT_STARTED, IN_PROGRESS, REVIEW, DELIVERED, COMPLETED)
    - startDate: Phase start date (ISO string)
    - dueDate: Phase due date (ISO string)
    - deliverDate: Phase delivery date (ISO string)
    - orderIndex: Phase order in project
    
    **Example:** Update phase status and delivery date`
  })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiParam({ name: 'id', description: 'Phase ID to update' })
  @ApiResponse({ 
    status: 200, 
    description: 'Phase updated successfully',
    schema: {
      example: {
        "id": "cmk2aswix0001jr1lwv4cpyun",
        "name": "Phase 1 - Updated Design",
        "status": "IN_PROGRESS",
        "startDate": "2024-01-15T00:00:00.000Z",
        "dueDate": "2024-03-15T00:00:00.000Z",
        "deliverDate": "2024-03-10T00:00:00.000Z",
        "project": { "id": "project_id", "name": "Project Name" },
        "tasks": []
      }
    }
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProjectPhaseDto,
  ) {
    return this.phaseService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete project phase' })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiParam({ name: 'id', description: 'Phase ID' })
  @ApiResponse({ status: 200, description: 'Phase deleted successfully' })
  async remove(@Param('id') id: string) {
    return this.phaseService.remove(id);
  }

  @Put('reorder')
  @ApiOperation({ 
    summary: 'Reorder project phases',
    description: 'Change the order of phases by providing array of phase IDs in desired order'
  })
  @ApiParam({ name: 'projectId', description: 'Project ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Phases reordered successfully',
    schema: {
      example: [
        {
          "id": "phase1",
          "name": "Phase 1 - Research",
          "orderIndex": 0
        },
        {
          "id": "phase2", 
          "name": "Phase 2 - Design",
          "orderIndex": 1
        }
      ]
    }
  })
  async reorder(
    @Param('projectId') projectId: string,
    @Body() body: ReorderPhasesDto,
  ) {
    return this.phaseService.reorderPhases(projectId, body.phaseIds);
  }
}