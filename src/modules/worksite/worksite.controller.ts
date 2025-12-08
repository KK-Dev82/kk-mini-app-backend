import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { WorksiteService } from './worksite.service';
import { WorksiteResponseDto } from '../checkin/dto/checkin-response.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Worksites')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('worksites')
export class WorksiteController {
  constructor(private readonly worksiteService: WorksiteService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active worksites' })
  @ApiResponse({ status: 200, description: 'Active worksites retrieved', type: [WorksiteResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  async findAll() {
    return this.worksiteService.findAllActive();
  }
}