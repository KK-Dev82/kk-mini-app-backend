import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectRole } from '@prisma/client';

export class AddMemberDto {
  @ApiProperty({ 
    example: 'cmj8gtwu900004a0pp15u7a1n',
    description: 'User ID to add to project'
  })
  @IsString()
  userId: string;

  @ApiProperty({ 
    example: 'DEVELOPER',
    enum: ProjectRole,
    required: false,
    description: 'Project role for the member'
  })
  @IsOptional()
  @IsEnum(ProjectRole)
  role?: ProjectRole;
}