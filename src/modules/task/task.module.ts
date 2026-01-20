import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TaskController } from './task.controller';
import { TaskManagementController } from './task-management.controller';
import { TaskService } from './task.service';
import { TaskManagementService } from './task-management.service';
import { TrelloService } from './trello/trello.service';
import { TrelloController } from './trello/trello.controller';
import { TrelloWebhookController } from './trello/trello.webhook.controller';
import { ProjectService } from '../project/project.service';

@Module({
  imports: [HttpModule],
  controllers: [TaskController, TaskManagementController, TrelloController, TrelloWebhookController],
  providers: [TaskService, TaskManagementService, TrelloService, ProjectService],
  exports: [TaskService, TaskManagementService, TrelloService],
})
export class TaskModule {}