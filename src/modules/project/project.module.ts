import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectMemberService } from './project-member.service';
import { ProjectPhaseController } from './project-phase.controller';
import { ProjectPhaseService } from './project-phase.service';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [ProjectController, ProjectPhaseController],
  providers: [ProjectService, ProjectMemberService, ProjectPhaseService],
  exports: [ProjectService, ProjectMemberService, ProjectPhaseService],
})
export class ProjectModule {}