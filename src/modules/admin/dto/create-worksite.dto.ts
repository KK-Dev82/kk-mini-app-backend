import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWorksiteDto {
  @ApiProperty({ example: 'สำนักงานใหญ่' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'อาคารสำนักงานหลัก ชั้น 1-10', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 13.7563 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiProperty({ example: 100.5018 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiProperty({ example: 500, required: false })
  @IsOptional()
  @IsNumber()
  @Min(50)
  @Max(2000)
  radius?: number;
}