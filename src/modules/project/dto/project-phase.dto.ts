import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsEnum, IsDateString } from 'class-validator';
import { PhaseStatus } from '@prisma/client';

export class CreateProjectPhaseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsInt()
  orderIndex: number;

  @ApiPropertyOptional({ enum: PhaseStatus })
  @IsOptional()
  @IsEnum(PhaseStatus)
  status?: PhaseStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliverDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  trelloListId?: string;
}

export class UpdateProjectPhaseDto {
  @ApiPropertyOptional({ 
    description: 'Phase name',
    example: 'Phase 2 - UI/UX Design Updated'
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ 
    description: 'Phase description',
    example: 'Updated user interface and experience design'
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ 
    description: 'Phase order (0-based index)',
    example: 1
  })
  @IsOptional()
  @IsInt()
  orderIndex?: number;

  @ApiPropertyOptional({ 
    enum: PhaseStatus,
    description: 'Phase status',
    example: 'REVIEW'
  })
  @IsOptional()
  @IsEnum(PhaseStatus)
  status?: PhaseStatus;

  @ApiPropertyOptional({ 
    description: 'Phase start date (ISO string)',
    example: '2024-02-01T00:00:00.000Z'
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ 
    description: 'Phase due date (ISO string)',
    example: '2024-03-15T00:00:00.000Z'
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({ 
    description: 'Actual delivery date (ISO string)',
    example: '2024-03-14T00:00:00.000Z'
  })
  @IsOptional()
  @IsDateString()
  deliverDate?: string;

  @ApiPropertyOptional({ 
    description: 'Trello List ID for integration',
    example: 'trello_list_123'
  })
  @IsOptional()
  @IsString()
  trelloListId?: string;
}