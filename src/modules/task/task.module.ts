import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TrelloService } from './trello/trello.service';
import { TrelloController } from './trello/trello.controller';
import { TrelloWebhookController } from './trello/trello.webhook.controller';

@Module({
  imports: [HttpModule],
  controllers: [TaskController, TrelloController, TrelloWebhookController],
  providers: [TaskService, TrelloService],
  exports: [TaskService],
})
export class TaskModule {}