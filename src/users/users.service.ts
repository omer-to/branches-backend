import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {
      constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

      async create(requestBody: CreateUserDto) {
            const newUser = new this.userModel(requestBody)
            return newUser.save()
      }

      async findByID(userID: string) {
            return this.userModel.findById(userID).exec()
      }

      async findByEmail(email: string) {
            return this.userModel.findOne({ email }).exec()
      }
}
