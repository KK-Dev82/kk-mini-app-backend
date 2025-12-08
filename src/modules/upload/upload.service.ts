import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import sharp from 'sharp';
import type { Express } from 'express';

@Injectable()
export class UploadService {
  private supabase: SupabaseClient;
  private bucket: string;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get('supabase.url') || '';
    const supabaseKey = this.configService.get('supabase.serviceKey') || '';
    this.bucket = this.configService.get('supabase.storageBucket') || 'avatars';

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async uploadFile(file: Express.Multer.File, folder: string = 'avatars'): Promise<string> {
    // Convert to WebP and resize
    const webpBuffer = await sharp(file.buffer)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();

    const fileName = `${folder}/${Date.now()}-${file.originalname.split('.')[0]}.webp`;

    const { data, error } = await this.supabase.storage
      .from(this.bucket)
      .upload(fileName, webpBuffer, {
        contentType: 'image/webp',
        upsert: false,
      });

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    return data.path;
  }

  async getFileUrl(filePath: string): Promise<string> {
    const { data } = this.supabase.storage
      .from(this.bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  }

  async deleteFile(filePath: string): Promise<void> {
    const { error } = await this.supabase.storage
      .from(this.bucket)
      .remove([filePath]);

    if (error) {
      throw new Error(`Delete failed: ${error.message}`);
    }
  }
}