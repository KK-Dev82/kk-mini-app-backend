import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ProjectService } from './project.service';
import { ProjectMemberService } from './project-member.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AddMemberDto } from './dto/add-member.dto';
import { ProjectResponseDto } from './dto/project-response.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly projectMemberService: ProjectMemberService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create new project with Trello board integration' })
  @ApiResponse({ status: 201, description: 'Project created successfully', type: ProjectResponseDto })
  @ApiResponse({ status: 409, description: 'Project key already exists', type: ErrorResponseDto })
  async create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all active projects' })
  @ApiResponse({ status: 200, description: 'Projects retrieved successfully', type: [ProjectResponseDto] })
  async findAll() {
    return this.projectService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('my-projects')
  @ApiOperation({ summary: 'Get user projects' })
  async getUserProjects(@Request() req) {
    return this.projectMemberService.getUserProjects(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project by ID' })
  @ApiResponse({ status: 200, description: 'Project retrieved successfully', type: ProjectResponseDto })
  @ApiResponse({ status: 404, description: 'Project not found', type: ErrorResponseDto })
  async findById(@Param('id') id: string) {
    return this.projectService.findById(id);
  }

  @Get('key/:key')
  @ApiOperation({ summary: 'Get project by key' })
  @ApiResponse({ status: 200, description: 'Project retrieved successfully', type: ProjectResponseDto })
  @ApiResponse({ status: 404, description: 'Project not found', type: ErrorResponseDto })
  async findByKey(@Param('key') key: string) {
    return this.projectService.findByKey(key);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update project' })
  @ApiResponse({ status: 200, description: 'Project updated successfully', type: ProjectResponseDto })
  @ApiResponse({ status: 404, description: 'Project not found', type: ErrorResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid date range', type: ErrorResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Post(':id/members')
  @ApiOperation({ summary: 'Add member to project (no auth required)' })
  @ApiResponse({ status: 201, description: 'Member added successfully' })
  @ApiResponse({ status: 400, description: 'User already a member or validation error', type: ErrorResponseDto })
  async addMember(
    @Param('id') projectId: string,
    @Body() addMemberDto: AddMemberDto
  ) {
    return this.projectMemberService.addMember(projectId, addMemberDto.userId, addMemberDto.role);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post(':id/members/auth')
  @ApiOperation({ summary: 'Add member to project (with auth)' })
  @ApiResponse({ status: 201, description: 'Member added successfully' })
  @ApiResponse({ status: 400, description: 'User already a member or validation error', type: ErrorResponseDto })
  async addMemberAuth(
    @Param('id') projectId: string,
    @Body() addMemberDto: AddMemberDto
  ) {
    return this.projectMemberService.addMember(projectId, addMemberDto.userId, addMemberDto.role);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id/members/:userId')
  @ApiOperation({ summary: 'Remove member from project' })
  async removeMember(
    @Param('id') projectId: string,
    @Param('userId') userId: string
  ) {
    return this.projectMemberService.removeMember(projectId, userId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id/members/:userId/role')
  @ApiOperation({ summary: 'Update member role' })
  async updateRole(
    @Param('id') projectId: string,
    @Param('userId') userId: string,
    @Body() body: { role: string }
  ) {
    return this.projectMemberService.updateRole(projectId, userId, body.role as any);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id/members')
  @ApiOperation({ summary: 'Get project members' })
  async getMembers(@Param('id') projectId: string) {
    return this.projectMemberService.getProjectMembers(projectId);
  }
}