import { Module } from '@nestjs/common';
import { BranchesModule } from './branches/branches.module';

@Module({
      imports: [BranchesModule],
      controllers: [],
      providers: [],
})
export class AppModule { }
