import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Public } from '../decorators/public-route.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
      constructor(private readonly usersService: UsersService) { }

      @Post()
      @Public()
      async create(@Body() createUserDto: CreateUserDto) {
            return await this.usersService.create(createUserDto);

      }
}
