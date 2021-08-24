import { Test, TestingModule } from '@nestjs/testing';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';

describe('BranchesController', () => {
      let controller: BranchesController;

      beforeEach(async () => {
            const module: TestingModule = await Test.createTestingModule({
                  controllers: [BranchesController],
                  providers: [BranchesService],
            }).compile();

            controller = module.get<BranchesController>(BranchesController);
      });

      /********************************************************************
       * TESTS FOR POST METHOD | {@link BranchesController.create}
       ********************************************************************/

      /**
       * fullAddress validation tests
       */
      it('should return 400 Bad Request if fullAddress field is missing or empty string.', () => {

      });

      /**
       * latitude validation tests
       */
      it('should cast string values for latitude to a number', () => {

      });

      it('should return 400 Bad Request for latitude values that are not between -90 and 90', () => {

      });

      /**
       * longitude validation tests
       */
      it('should cast string values for longitude to a number', () => {

      });


      it('should return 400 Bad Request for latitude values that are not between -180 and 180', () => {

      });

      /**
       * name validation tests
       */
      it('should return 400 Bad Request if name field has less than 2 characters in it.', () => {

      });

      /**
       * phone number validation tests
       */
      it('should return 400 Bad Request if phone field is not a valid Turkish number.', () => {

      });

      /**
       * Authentication Tests
       */
      it('should return 401 Unauthorized if the user is not authenticated.', () => {

      });

      /**
       * Authorization Tests
       */
      it('should return 403 Forbidden if the user is not the company owner.', () => {

      });

});
