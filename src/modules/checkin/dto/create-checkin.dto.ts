import { IsString, IsNumber, IsOptional, IsEnum, IsBase64 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CheckinType, LeaveType } from '@prisma/client';

export class CreateCheckinDto {
  @ApiProperty({ example: 'CHECK_IN', enum: CheckinType })
  @IsEnum(CheckinType)
  type: CheckinType;

  @ApiProperty({ example: 13.7563, required: false })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ example: 100.5018, required: false })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ example: 'NONE', enum: LeaveType, required: false })
  @IsOptional()
  @IsEnum(LeaveType)
  leaveType?: LeaveType;

  @ApiProperty({ example: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...', required: false })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiProperty({ example: 'ออกพบลูกค้า', required: false })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty({ example: 'พบลูกค้าที่อาคาร ABC ชั้น 5', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}