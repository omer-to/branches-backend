import { Module } from '@nestjs/common';
import { BranchesModule } from './branches/branches.module';
import { UsersModule } from './users/users.module';

@Module({
      imports: [BranchesModule, UsersModule],
      controllers: [],
      providers: [],
})
export class AppModule { }
