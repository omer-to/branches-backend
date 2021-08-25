import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'

import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './passport-strategies/local.strategy';
import { JwtStrategy } from './passport-strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
      imports: [
            UsersModule,
            PassportModule,
            JwtModule.register({
                  secret: process.env.JWT_SECRET,
                  signOptions: { expiresIn: '1d' },
            }),
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
