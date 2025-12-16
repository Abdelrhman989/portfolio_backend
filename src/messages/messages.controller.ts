import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiBearerAuth('access-token')
    @ApiResponse({ status: 200, description: 'Get all messages' })
    getAll() {
        return this.messagesService.findAll();
    }

    @Post()
    @ApiBody({ type: Object })
    @ApiResponse({ status: 201, description: 'Create message' })
    create(@Body() data: any) {
        return this.messagesService.create(data);
    }
}
