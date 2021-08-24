import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

import { BranchesModule } from './branches/branches.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


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
                  UsersModule,
                  AuthModule
            ],
      controllers: [],
      providers: [],
})
export class AppModule { }
