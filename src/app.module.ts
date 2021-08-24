import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

import { BranchesModule } from './branches/branches.module';
import { UsersModule } from './users/users.module';


@Module({
      imports:
            [
                  ConfigModule.forRoot(),
                  MongooseModule.forRoot(
                        process.env.MONGO_CONNECTION_URI,
                        {
                              useNewUrlParser: true,
                              useUnifiedTopology: true
                        }
                  ),
                  BranchesModule,
                  UsersModule
            ],
      controllers: [],
      providers: [],
})
export class AppModule { }
