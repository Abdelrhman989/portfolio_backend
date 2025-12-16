import { IsString, IsNumber, IsOptional, IsBoolean, Min, Max } from "class-validator"
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSkillDto {
  @ApiProperty({ example: 'TypeScript', description: 'Skill name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Programming Language', description: 'Skill category' })
  @IsString()
  category: string;

  @ApiPropertyOptional({ example: 90, description: 'Proficiency (1-100)' })
  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  proficiency?: number;

  @ApiPropertyOptional({ example: true, description: 'Is the skill active?' })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
