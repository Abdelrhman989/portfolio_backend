import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common"
import { SkillsService } from "./skills.service"
import { CreateSkillDto } from "./dto/create-skill.dto"
import { JwtAuthGuard } from "../auth/guards/jwt.guard"
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Skills')
@Controller("skills")
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all skills' })
  findAll() {
    return this.skillsService.findAll()
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get skill by id' })
  findById(@Param('id') id: string) {
    return this.skillsService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateSkillDto })
  @ApiResponse({ status: 201, description: 'Create a new skill' })
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateSkillDto })
  @ApiResponse({ status: 200, description: 'Update a skill' })
  update(@Param('id') id: string, @Body() updateSkillDto: CreateSkillDto) {
    return this.skillsService.update(id, updateSkillDto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Delete a skill' })
  delete(@Param('id') id: string) {
    return this.skillsService.delete(id);
  }
}
