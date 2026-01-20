import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Design Homepage Mockup' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Create wireframe and mockup for homepage design', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'cmjcextnn0002ma7q2tc2xpem', required: false })
  @IsOptional()
  @IsString()
  projectId?: string;

  @ApiProperty({ example: 'cmk2aswix0001jr1lwv4cpyun', required: false })
  @IsOptional()
  @IsString()
  phaseId?: string;

  @ApiProperty({ example: 'cmj6ywwcn00002h4ncjyw876h', required: false })
  @IsOptional()
  @IsString()
  assignedUserId?: string;

  @ApiProperty({ example: '2024-01-15T12:00:00.000Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({ enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], example: 'HIGH', required: false })
  @IsOptional()
  @IsEnum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}