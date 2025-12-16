import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-super-secret-jwt-key-change-this-in-production-12345678',
    })
    console.log('JwtStrategy initialized with secret')
  }

  async validate(payload: any) {
    console.log('✅ JWT validation successful - payload:', payload)
    return { admin: payload.admin }
  }
}
