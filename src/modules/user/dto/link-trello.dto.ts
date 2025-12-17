import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LinkTrelloDto {
  @ApiProperty({ example: '61b474fa9cbcfb1ec943326a', description: 'Trello member ID' })
  @IsString()
  trelloMemberId: string;
}