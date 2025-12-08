import { Module } from '@nestjs/common';
import { WorksiteController } from './worksite.controller';
import { WorksiteService } from './worksite.service';

@Module({
  controllers: [WorksiteController],
  providers: [WorksiteService],
  exports: [WorksiteService],
})
export class WorksiteModule {}