import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { AdminService } from './admin.service';
import { CreateWorksiteDto } from './dto/create-worksite.dto';
import { UpdateWorksiteDto } from './dto/update-worksite.dto';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('worksites')
  @ApiOperation({ summary: 'Create new worksite (Admin only)' })
  @ApiResponse({ status: 201, description: 'Worksite created successfully' })
  async createWorksite(@Body() createWorksiteDto: CreateWorksiteDto) {
    return this.adminService.createWorksite(createWorksiteDto);
  }

  @Get('worksites')
  @ApiOperation({ summary: 'Get all worksites (Admin only)' })
  @ApiResponse({ status: 200, description: 'Worksites retrieved successfully' })
  async getWorksites() {
    return this.adminService.getWorksites();
  }

  @Put('worksites/:id')
  @ApiOperation({ summary: 'Update worksite (Admin only)' })
  @ApiResponse({ status: 200, description: 'Worksite updated successfully' })
  async updateWorksite(@Param('id') id: string, @Body() updateWorksiteDto: UpdateWorksiteDto) {
    return this.adminService.updateWorksite(id, updateWorksiteDto);
  }

  @Delete('worksites/:id')
  @ApiOperation({ summary: 'Deactivate worksite (Admin only)' })
  @ApiResponse({ status: 200, description: 'Worksite deactivated successfully' })
  async deactivateWorksite(@Param('id') id: string) {
    return this.adminService.deactivateWorksite(id);
  }
}