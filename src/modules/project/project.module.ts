import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectMemberService } from './project-member.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ProjectMemberService],
  exports: [ProjectService, ProjectMemberService],
})
export class ProjectModule {}