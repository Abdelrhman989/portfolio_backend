import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common"
import { ProjectsService } from "./projects.service"
import { CreateProjectDto } from "./dto/create-project.dto"
import { JwtAuthGuard } from "../auth/guards/jwt.guard"
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all projects' })
  findAll() {
    return this.projectsService.findAll()
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get project by id' })
  findById(@Param('id') id: string) {
    return this.projectsService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateProjectDto })
  @ApiResponse({ status: 201, description: 'Create a new project' })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateProjectDto })
  @ApiResponse({ status: 200, description: 'Update a project' })
  update(@Param('id') id: string, @Body() updateProjectDto: CreateProjectDto) {
    return this.projectsService.update(id, updateProjectDto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Delete a project' })
  delete(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
}
