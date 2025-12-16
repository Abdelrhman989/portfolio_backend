import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Services')
@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get all services' })
    getAll() {
        return this.servicesService.findAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Get service by id' })
    getOne(@Param('id') id: string) {
        return this.servicesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBearerAuth('access-token')
    @ApiBody({ type: Object })
    @ApiResponse({ status: 201, description: 'Create service' })
    create(@Body() data: any) {
        return this.servicesService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiBearerAuth('access-token')
    @ApiBody({ type: Object })
    @ApiResponse({ status: 200, description: 'Update service' })
    update(@Param('id') id: string, @Body() data: any) {
        return this.servicesService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiBearerAuth('access-token')
    @ApiResponse({ status: 200, description: 'Delete service' })
    delete(@Param('id') id: string) {
        return this.servicesService.delete(id);
    }
}
