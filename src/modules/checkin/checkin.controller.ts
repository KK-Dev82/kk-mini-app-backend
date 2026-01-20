import { Controller, Post, Get, Body, UseGuards, Request, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CheckinService } from './checkin.service';
import { AttendanceService } from './attendance.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { CheckinResponseDto } from './dto/checkin-response.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Check-in')
@Controller('checkin')
export class CheckinController {
  constructor(
    private readonly checkinService: CheckinService,
    private readonly attendanceService: AttendanceService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create check-in/check-out' })
  @ApiResponse({ status: 201, description: 'Check-in created successfully', type: CheckinResponseDto })
  @ApiResponse({ status: 400, description: 'Too far from worksite or validation error', type: ErrorResponseDto })
  @ApiResponse({ status: 404, description: 'Worksite not found', type: ErrorResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async createCheckin(@Body() createCheckinDto: CreateCheckinDto, @Request() req) {
    try {
      return await this.checkinService.createCheckin(createCheckinDto, req.user.id);
    } catch (error) {
      console.error('Controller error:', error);
      throw error;
    }
  }

  @Get('history')
  @ApiOperation({ summary: 'Get user check-in history with pagination (no auth)' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page (default: 20)' })
  @ApiResponse({ status: 200, description: 'Check-in history retrieved', type: [CheckinResponseDto] })
  async getHistory(
    @Request() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string
  ) {
    const pageNum = parseInt(page || '1') || 1;
    const limitNum = parseInt(limit || '20') || 20;
    return this.checkinService.getUserHistory(req.user?.id, pageNum, limitNum);
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current check-in status' })
  @ApiResponse({ status: 200, description: 'Check-in status retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async getStatus(@Request() req) {
    return this.checkinService.getCheckinStatus(req.user.id);
  }

  @Get('daily')
  @ApiOperation({ summary: 'Get all employees daily status (no auth)' })
  @ApiResponse({ status: 200, description: 'All employees daily status retrieved' })
  async getDailyCheckins() {
    return this.checkinService.getDailyCheckins();
  }

  @Get('user/:userId/history')
  @ApiOperation({ summary: 'Get user check-in history by user ID with pagination (no auth)' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page (default: 20)' })
  @ApiResponse({ status: 200, description: 'Check-in history retrieved', type: [CheckinResponseDto] })
  async getUserHistory(
    @Param('userId') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string
  ) {
    const pageNum = parseInt(page || '1') || 1;
    const limitNum = parseInt(limit || '20') || 20;
    return this.checkinService.getUserHistory(userId, pageNum, limitNum);
  }

  @Get('user/:userId/status')
  @ApiOperation({ summary: 'Get user check-in status by user ID (no auth)' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Check-in status retrieved' })
  async getUserStatus(@Param('userId') userId: string) {
    return this.checkinService.getCheckinStatus(userId);
  }

  @Post('process-attendance')
  @ApiOperation({ summary: 'Process daily attendance (mark absent & auto checkout)' })
  @ApiResponse({ status: 200, description: 'Attendance processed successfully' })
  async processDailyAttendance() {
    return this.attendanceService.processDailyAttendance();
  }
}