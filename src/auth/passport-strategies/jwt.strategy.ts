import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import type { JwtPayload } from 'jsonwebtoken'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
      constructor() {
            super({
                  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                  ignoreExpiration: false,
                  secretOrKey: process.env.JWT_SECRET,
            });
      }

      async validate(payload: JwtPayload) {
            return { userId: payload.sub, email: payload.email, role: payload.role };
      }
}