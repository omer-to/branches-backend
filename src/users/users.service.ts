import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {
      constructor(@InjectModel(User.name) private branchModel: Model<UserDocument>) { }

      async create(requestBody: CreateUserDto) {
            const newUser = new this.branchModel(requestBody)
            return newUser.save()
      }
}
