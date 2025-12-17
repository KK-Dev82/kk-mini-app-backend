import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CheckinService } from './checkin.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { CheckinResponseDto } from './dto/checkin-response.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Check-in')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('checkin')
export class CheckinController {
  constructor(private readonly checkinService: CheckinService) {}

  @Post()
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
  @ApiOperation({ summary: 'Get user check-in history' })
  @ApiResponse({ status: 200, description: 'Check-in history retrieved', type: [CheckinResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async getHistory(@Request() req) {
    return this.checkinService.getUserHistory(req.user.id);
  }

  @Get('status')
  @ApiOperation({ summary: 'Get current check-in status' })
  @ApiResponse({ status: 200, description: 'Check-in status retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async getStatus(@Request() req) {
    return this.checkinService.getCheckinStatus(req.user.id);
  }
}