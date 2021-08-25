import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { Roles } from '../decorators/roles.decorator';
import { RoleGuard } from '../guards/role.guard';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branches')
export class BranchesController {
      constructor(private readonly branchesService: BranchesService) { }

      @Post()
      @Roles('employer')
      @UseGuards(RoleGuard)
      create(@Body() requestBody: CreateBranchDto) {
            return this.branchesService.create(requestBody);
      }

      @Get(':branchID')
      findByID(@Param('branchID') branchID: string) {
            return this.branchesService.findByID(branchID);
      }

      @Patch(':branchID')
      updateByID(
            @Param('branchID') branchID: string,
            @Body() requestBody: UpdateBranchDto
      ) {
            return this.branchesService.updateByID(branchID, requestBody)
      }

      @Delete(':branchID')
      deleteByID(@Param('branchID') branchID) {
            return this.branchesService.deleteByID(branchID)
      }
}
