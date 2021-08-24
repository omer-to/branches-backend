import { Injectable } from '@nestjs/common';

import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchesService {
      create(requestBody: CreateBranchDto) {
            return requestBody
      }
}
