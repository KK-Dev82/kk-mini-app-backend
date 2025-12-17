import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '@prisma/client';

export class CreateProjectDto {
  @ApiProperty({ example: 'Mobile App Development' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'A comprehensive mobile application for task management', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'MOBILE' })
  @IsString()
  key: string;

  @ApiProperty({ example: '6232be4e3990792af3c6ef82', required: false, description: 'Optional - uses default board if not provided' })
  @IsOptional()
  @IsString()
  trelloBoardId?: string;

  @ApiProperty({ example: 'MOBILE', required: false, description: 'Optional - uses key as tag if not provided' })
  @IsOptional()
  @IsString()
  trelloTag?: string;

  @ApiProperty({ example: '2025-01-01T00:00:00Z', required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ example: '2025-06-30T23:59:59Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({ example: 'PLANNING', enum: ProjectStatus, required: false })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;
}