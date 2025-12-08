import { IsEnum, IsNumber, IsString, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CheckinType } from '@prisma/client';

export class CreateCheckinDto {
  @ApiProperty({ enum: CheckinType })
  @IsEnum(CheckinType)
  type: CheckinType;

  @ApiProperty({ example: 13.7563 })
  @IsNumber()
  latitude: number;

  @ApiProperty({ example: 100.5018 })
  @IsNumber()
  longitude: number;

  @ApiProperty()
  @IsUUID()
  worksiteId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}