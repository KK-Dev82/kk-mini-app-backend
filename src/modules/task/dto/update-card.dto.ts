import { IsString, IsOptional } from 'class-validator';
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
}

export class MoveCardDto {
  @ApiProperty({ example: 'list_id_456' })
  @IsString()
  listId: string;
}