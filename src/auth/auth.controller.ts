import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { Public } from '../decorators/public-route.decorator';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { LocalAuthGuard } from '../guards/local-auth.guard'
import { AuthService } from './auth.service'


@Controller()
@Public()
export class AuthController {
      constructor(private readonly authService: AuthService, private readonly usersService: UsersService) { }

      @Post('/signup')
      async signUp(@Body() requestBody: CreateUserDto): Promise<{ userID: string }> {
            const user = await this.authService.signUp(requestBody)
            return { userID: user.id }
      }

      @UseGuards(LocalAuthGuard)
      @Public()
      @Post('/signin')
      async signIn(@Body() requestBody: Omit<CreateUserDto, 'role'>): Promise<{ userID: string, access_token: string }> {
            const { access_token, userID } = await this.authService.signIn(requestBody);
            return { access_token, userID }
      }
}