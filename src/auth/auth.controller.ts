import { Controller, Post, Body } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("login")
  @ApiBody({ schema: { type: 'object', properties: { password: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'Login and get token' })
  async login(@Body() body: { password: string }) {
    return this.authService.login(body.password)
  }
}
