import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
      constructor(private usersService: UsersService, private jwtService: JwtService) { }

      async signUp(createUserDto: CreateUserDto) {
            const saltOrRounds = 10;
            const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds)
            return this.usersService.create({ ...createUserDto, password: hashedPassword })
      }

      async signIn(requestBody: Omit<CreateUserDto, 'role'>) {
            const user = await this.usersService.findByEmail(requestBody.email)
            if (!user) {
                  throw new UnauthorizedException('Invalid Credentials')
            }
            try {
                  const match = await bcrypt.compare(requestBody.password, user.password)
                  if (match) {
                        const payload = { email: user.email, sub: user.id, role: user.role };
                        return {
                              access_token: this.jwtService.sign(payload),
                              userID: user.id
                        };
                  }
            } catch (error) {
                  throw new UnauthorizedException('Invalid Credentials')
            }
      }
}
