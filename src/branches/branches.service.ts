import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { Branch, BranchDocument } from './schemas/branch.schema'
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchesService {
      constructor(@InjectModel(Branch.name) private branchModel: Model<BranchDocument>) { }

      create(requestBody: CreateBranchDto) {
            return requestBody
      }

      findByID(branchID: string) {
            return branchID
      }

      updateByID(branchID: string, requestBody: UpdateBranchDto) {
            return { branchID, requestBody }
      }

      deleteByID(branchID: string) {
            return branchID
      }
}
