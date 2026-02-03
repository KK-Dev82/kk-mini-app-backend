import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional } from 'class-validator';

export class AddWhitelistDto {
  @ApiProperty({
    description: 'Email address to add to whitelist',
    example: 'user@example.com'
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User role',
    enum: ['USER', 'ADMIN'],
    default: 'USER',
    required: false
  })
  @IsEnum(['USER', 'ADMIN'])
  @IsOptional()
  role?: 'USER' | 'ADMIN';
}
