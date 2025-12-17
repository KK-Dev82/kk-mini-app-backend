import { IsString, IsOptional, IsArray, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({ example: 'list_id_123' })
  @IsString()
  listId: string;

  @ApiProperty({ example: 'New Task Title' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Task description', required: false })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({ example: ['member_id_1', 'member_id_2'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  memberIds?: string[];

  @ApiProperty({ example: '2025-12-01T09:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ example: '2025-12-05T12:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({ example: ['Step 1', 'Step 2', 'Step 3'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  checklistItems?: string[];

  @ApiProperty({ example: 'clxxx123', required: false })
  @IsOptional()
  @IsString()
  projectId?: string;
}