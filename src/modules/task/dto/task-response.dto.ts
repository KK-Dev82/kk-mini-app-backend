import { ApiProperty } from '@nestjs/swagger';

export class TaskResponseDto {
  @ApiProperty({ example: 'clxxx123' })
  id: string;

  @ApiProperty({ example: 'trello_card_123' })
  trelloCardId: string;

  @ApiProperty({ example: 'Complete project setup' })
  title: string;

  @ApiProperty({ example: 'Setup the initial project structure' })
  description: string;

  @ApiProperty({ example: 'TODO', enum: ['TODO', 'IN_PROGRESS', 'DONE'] })
  status: string;

  @ApiProperty({ example: 'clxxx456' })
  assignedUserId: string;

  @ApiProperty({ example: 'clxxx789' })
  worksiteId: string;

  @ApiProperty({ example: '2023-12-10T00:00:00.000Z' })
  dueDate: string;

  @ApiProperty({ example: '2023-12-02T12:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-12-02T12:00:00.000Z' })
  updatedAt: string;
}