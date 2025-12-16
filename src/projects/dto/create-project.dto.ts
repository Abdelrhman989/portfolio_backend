import { IsString, IsArray, IsOptional, IsBoolean } from "class-validator"
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'My Project', description: 'Project title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'A description of the project', description: 'Project description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 'https://example.com/image.png', description: 'Image URL' })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiPropertyOptional({ example: ['NestJS', 'TypeScript'], description: 'Technologies used' })
  @IsArray()
  @IsOptional()
  technologies?: string[];

  @ApiPropertyOptional({ example: 'https://github.com/username/repo', description: 'GitHub link' })
  @IsString()
  @IsOptional()
  githubLink?: string;

  @ApiPropertyOptional({ example: 'https://myproject.com', description: 'Live project link' })
  @IsString()
  @IsOptional()
  liveLink?: string;

  @ApiPropertyOptional({ example: true, description: 'Is the project active?' })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
