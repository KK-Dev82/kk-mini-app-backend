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
    // Webhook handler - currently disabled as we only create tasks on manual assignment
    return { status: 'ok' };
  }
}