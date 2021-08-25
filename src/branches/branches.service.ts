import { Model, SchemaTypes } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { Branch, BranchDocument } from './schemas/branch.schema'
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchesService {
      constructor(@InjectModel(Branch.name) private branchModel: Model<BranchDocument>) { }

      create(requestBody: CreateBranchDto) {
            const newBranch = new this.branchModel(requestBody)
            return newBranch.save()
      }

      findAll() {
            return this.branchModel.find({})
      }

      findByID(branchID: string) {
            return this.branchModel.findById(branchID)
      }

      updateByID(branchID: string, requestBody: UpdateBranchDto) {
            return this.branchModel.findByIdAndUpdate(branchID, requestBody, { upsert: false, new: true })
      }

      deleteByID(branchID: string) {
            return this.branchModel.deleteOne({ id: new SchemaTypes.ObjectId(branchID) })
      }
}
