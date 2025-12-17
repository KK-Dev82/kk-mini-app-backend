import { ApiProperty } from '@nestjs/swagger';

export class ProjectResponseDto {
  @ApiProperty({ example: 'clxxx123' })
  id: string;

  @ApiProperty({ example: 'Work-Life Balance App' })
  name: string;

  @ApiProperty({ example: 'A comprehensive mobile application for task management', nullable: true })
  description: string | null;

  @ApiProperty({ example: 'WLB' })
  key: string;

  @ApiProperty({ example: 'TRELL0B0ARD1D' })
  trelloBoardId: string;

  @ApiProperty({ example: 'WLB' })
  trelloTag: string;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty({ example: '2023-12-02T12:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-12-02T12:00:00.000Z' })
  updatedAt: string;
}