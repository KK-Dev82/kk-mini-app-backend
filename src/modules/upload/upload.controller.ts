import { Controller, Post, UseInterceptors, UploadedFile, Get, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UploadService } from './upload.service';
import type { Express } from 'express';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('avatar')
  @ApiOperation({ summary: 'Upload user avatar' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'File uploaded successfully' })
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    try {
      const filePath = await this.uploadService.uploadFile(file, 'avatars');
      const publicUrl = await this.uploadService.getFileUrl(filePath);

      return {
        filePath,
        publicUrl,
        message: 'Avatar uploaded successfully',
      };
    } catch (error) {
      return { error: error.message, details: 'Failed to upload avatar' };
    }
  }

  @Get('url/:filePath')
  @ApiOperation({ summary: 'Get file public URL' })
  async getFileUrl(@Param('filePath') filePath: string) {
    try {
      const publicUrl = await this.uploadService.getFileUrl(filePath);
      return { publicUrl };
    } catch (error) {
      return { error: error.message, details: 'Failed to get file URL' };
    }
  }
}