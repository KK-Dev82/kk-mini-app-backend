import { ApiProperty } from '@nestjs/swagger';

export class TrelloBoardDto {
  @ApiProperty({ example: '6232be4e3990792af3c6ef82' })
  id: string;

  @ApiProperty({ example: 'Todo' })
  name: string;

  @ApiProperty({ example: 'HsGhputd' })
  shortLink: string;

  @ApiProperty({ example: 'https://trello.com/b/HsGhputd/todo' })
  url: string;
}

export class TrelloListDto {
  @ApiProperty({ example: '6232be4e3990792af3c6ef83' })
  id: string;

  @ApiProperty({ example: 'To Do' })
  name: string;

  @ApiProperty({ example: 16384 })
  pos: number;

  @ApiProperty({ example: false })
  closed: boolean;
}

export class TrelloLabelDto {
  @ApiProperty({ example: '6232be4e1cbc61053ba0ce61' })
  id: string;

  @ApiProperty({ example: 'Priority' })
  name: string;

  @ApiProperty({ example: 'yellow' })
  color: string;
}

export class TrelloCheckItemDto {
  @ApiProperty({ example: '693bde7bc9dbae64a7198263' })
  id: string;

  @ApiProperty({ example: 'Setup Stripe account' })
  name: string;

  @ApiProperty({ example: 'incomplete', enum: ['complete', 'incomplete'] })
  state: string;

  @ApiProperty({ example: 140737488355328 })
  pos: number;
}

export class TrelloChecklistDto {
  @ApiProperty({ example: '693bde7a6f0ab14bd1705969' })
  id: string;

  @ApiProperty({ example: 'ขั้นตอนการทำงาน' })
  name: string;

  @ApiProperty({ type: [TrelloCheckItemDto] })
  checkItems: TrelloCheckItemDto[];
}

export class TrelloBadgesDto {
  @ApiProperty({ example: 4 })
  checkItems: number;

  @ApiProperty({ example: 2 })
  checkItemsChecked: number;

  @ApiProperty({ example: 0 })
  comments: number;

  @ApiProperty({ example: 0 })
  attachments: number;
}

export class TrelloCardDto {
  @ApiProperty({ example: '693bde7ae79da72c4b6e0d27' })
  id: string;

  @ApiProperty({ example: '[ECOM] Build payment system' })
  name: string;

  @ApiProperty({ example: 'Implement Stripe payment integration' })
  desc: string;

  @ApiProperty({ example: '6232be4e3990792af3c6ef83' })
  idList: string;

  @ApiProperty({ example: 'To Do' })
  listName: string;

  @ApiProperty({ example: 311295 })
  pos: number;

  @ApiProperty({ example: false })
  closed: boolean;

  @ApiProperty({ example: '2025-12-15T09:00:00.000Z', nullable: true })
  start: string | null;

  @ApiProperty({ example: '2025-12-20T17:00:00.000Z', nullable: true })
  due: string | null;

  @ApiProperty({ example: false })
  dueComplete: boolean;

  @ApiProperty({ example: ['61b474fa9cbcfb1ec943326a'], type: [String] })
  idMembers: string[];

  @ApiProperty({ type: [TrelloLabelDto] })
  labels: TrelloLabelDto[];

  @ApiProperty({ type: [TrelloChecklistDto] })
  checklists: TrelloChecklistDto[];

  @ApiProperty({ type: TrelloBadgesDto })
  badges: TrelloBadgesDto;

  @ApiProperty({ example: 'SZ3y73He' })
  shortLink: string;

  @ApiProperty({ example: 'https://trello.com/c/SZ3y73He/12-ecom-build-payment-system' })
  url: string;
}

export class TrelloMemberDto {
  @ApiProperty({ example: '61b474fa9cbcfb1ec943326a' })
  id: string;

  @ApiProperty({ example: 'jatupornsrimongkol1' })
  username: string;

  @ApiProperty({ example: 'Jatuporn Srimongkol' })
  fullName: string;

  @ApiProperty({ example: 'https://trello-avatars.s3.amazonaws.com/avatar.jpg', nullable: true })
  avatarUrl: string | null;

  @ApiProperty({ example: 'JS' })
  initials: string;
}