import { Module } from '@nestjs/common';
import { CheckinController } from './checkin.controller';
import { CheckinService } from './checkin.service';
import { AttendanceService } from './attendance.service';

@Module({
  controllers: [CheckinController],
  providers: [CheckinService, AttendanceService],
  exports: [CheckinService, AttendanceService],
})
export class CheckinModule {}