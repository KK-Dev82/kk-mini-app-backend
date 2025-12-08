import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TaskService } from '../task.service';

@ApiTags('Trello Webhook')
@Controller('webhook/trello')
export class TrelloWebhookController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Handle Trello webhook events' })
  async handleWebhook(@Body() payload: any) {
    if (payload.action?.type === 'createCard' || payload.action?.type === 'updateCard') {
      const cardData = payload.action.data.card;
      await this.taskService.syncFromTrello(cardData);
    }

    return { status: 'ok' };
  }
}