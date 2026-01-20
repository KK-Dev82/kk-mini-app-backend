import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class ReorderPhasesDto {
  @ApiProperty({
    description: 'Array of phase IDs in desired order',
    example: ['phase1_id', 'phase2_id', 'phase3_id'],
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  phaseIds: string[];
}