import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCardDto {
  @ApiProperty({ example: 'list_id_456', required: false })
  @IsOptional()
  @IsString()
  listId?: string;

  @ApiProperty({ example: 'Updated Task Title', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Updated description', required: false })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({ example: '2025-12-01T09:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ example: '2025-12-05T12:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: string;
}

export class MoveCardDto {
  @ApiProperty({ example: 'list_id_456' })
  @IsString()
  listId: string;
}