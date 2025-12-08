import { ApiProperty } from '@nestjs/swagger';

export class WorksiteResponseDto {
  @ApiProperty({ example: 'clxxx123' })
  id: string;

  @ApiProperty({ example: 'Main Office' })
  name: string;

  @ApiProperty({ example: 'Company headquarters' })
  description: string;

  @ApiProperty({ example: 13.7563 })
  latitude: number;

  @ApiProperty({ example: 100.5018 })
  longitude: number;

  @ApiProperty({ example: 500 })
  radius: number;
}

export class CheckinResponseDto {
  @ApiProperty({ example: 'clxxx123' })
  id: string;

  @ApiProperty({ example: 'CHECK_IN', enum: ['CHECK_IN', 'CHECK_OUT'] })
  type: string;

  @ApiProperty({ example: 13.7563 })
  latitude: number;

  @ApiProperty({ example: 100.5018 })
  longitude: number;

  @ApiProperty({ example: 45.5 })
  distance: number;

  @ApiProperty({ example: 'On time arrival' })
  notes: string;

  @ApiProperty({ example: '2023-12-02T08:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ type: WorksiteResponseDto })
  worksite?: WorksiteResponseDto;
}