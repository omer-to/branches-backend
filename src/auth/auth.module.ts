import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'

import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './passport-strategies/local.strategy';
import { JwtStrategy } from './passport-strategies/jwt.strategy';

@Module({
      imports: [
            UsersModule,
            PassportModule,
            JwtModule.register({
                  secret: process.env.JWT_SECRET,
                  signOptions: { expiresIn: '60s' },
            })
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
