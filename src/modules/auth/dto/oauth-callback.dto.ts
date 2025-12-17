import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OAuthCallbackDto {
  @ApiProperty({ example: 'google-oauth2|106304903162162245125' })
  @IsString()
  sub: string;

  @ApiProperty({ example: 'jatuporn.smk@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Jatuporn Srimongkol' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'https://lh3.googleusercontent.com/...' })
  @IsOptional()
  @IsString()
  picture?: string;

  @ApiProperty({ example: 'Jatuporn' })
  @IsOptional()
  @IsString()
  given_name?: string;

  @ApiProperty({ example: 'Srimongkol' })
  @IsOptional()
  @IsString()
  family_name?: string;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  email_verified?: boolean;
}