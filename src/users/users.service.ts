import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
      create(requestBody: CreateUserDto) {
            return requestBody
      }
}
