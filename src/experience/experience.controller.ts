import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Experience')
@Controller('experience')
export class ExperienceController {
    constructor(private readonly experienceService: ExperienceService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get all experience' })
    getAll() {
        return this.experienceService.findAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Get experience by id' })
    getOne(@Param('id') id: string) {
        return this.experienceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBearerAuth('access-token')
    @ApiBody({ type: Object })
    @ApiResponse({ status: 201, description: 'Create experience' })
    create(@Body() data: any) {
        return this.experienceService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiBearerAuth('access-token')
    @ApiBody({ type: Object })
    @ApiResponse({ status: 200, description: 'Update experience' })
    update(@Param('id') id: string, @Body() data: any) {
        return this.experienceService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiBearerAuth('access-token')
    @ApiResponse({ status: 200, description: 'Delete experience' })
    delete(@Param('id') id: string) {
        return this.experienceService.delete(id);
    }
}
