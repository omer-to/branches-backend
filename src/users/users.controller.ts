import { Controller, Get, Param, } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
      constructor(private readonly usersService: UsersService) { }

      @Get(':userID')
      findByID(@Param('userID') userID: string) {

            return this.usersService.findByID(userID)
      }
}
