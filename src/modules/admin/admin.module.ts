import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from '../user/user.module';
import { WorksiteModule } from '../worksite/worksite.module';
import { CheckinModule } from '../checkin/checkin.module';

@Module({
  imports: [UserModule, WorksiteModule, CheckinModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}