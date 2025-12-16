import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  async login(password: string): Promise<{ access_token: string }> {
    const expectedPassword = process.env.ADMIN_PASSWORD

    console.log('Login attempt:')
    console.log('- Received password:', password)
    console.log('- Expected password:', expectedPassword)
    console.log('- Match:', password === expectedPassword)

    if (password !== expectedPassword) {
      throw new UnauthorizedException("Invalid password")
    }

    const payload = { admin: true }
    const token = this.jwtService.sign(payload)
    console.log('✅ Login successful, generated token')

    return {
      access_token: token,
    }
  }
}
