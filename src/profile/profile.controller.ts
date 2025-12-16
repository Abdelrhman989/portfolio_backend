import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get profile' })
    getProfile() {
        return this.profileService.getProfile();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBearerAuth('access-token')
    @ApiBody({ type: Object })
    @ApiResponse({ status: 200, description: 'Update profile' })
    updateProfile(@Body() profileData: any) {
        return this.profileService.updateProfile(profileData);
    }
}
