import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

import { BranchesModule } from './branches/branches.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';


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
      providers:
            [
                  {
                        provide: APP_GUARD,
                        useClass: JwtAuthGuard
                  }
            ],
})
export class AppModule { }
