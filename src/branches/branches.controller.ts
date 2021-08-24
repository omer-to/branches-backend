import { Body, Controller, Post } from '@nestjs/common';

import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Controller('branches')
export class BranchesController {
      constructor(private readonly branchesService: BranchesService) { }

      @Post()
      create(@Body() requestBody: CreateBranchDto) {
            return this.branchesService.create(requestBody);
      }
}
