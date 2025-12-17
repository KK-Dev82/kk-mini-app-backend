import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WorksiteModule } from './modules/worksite/worksite.module';
import { CheckinModule } from './modules/checkin/checkin.module';
import { TaskModule } from './modules/task/task.module';
import { AdminModule } from './modules/admin/admin.module';
import { appConfig, dbConfig, trelloConfig, authConfig } from './config';
import supabaseConfig from './config/supabase.config';
import { UploadModule } from './modules/upload/upload.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, trelloConfig, authConfig, supabaseConfig],
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    WorksiteModule,
    CheckinModule,
    TaskModule,
    AdminModule,
    UploadModule,
    ProjectModule,
  ],
})
export class AppModule {}