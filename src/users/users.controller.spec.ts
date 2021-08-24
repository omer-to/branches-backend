import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
      let controller: UsersController;

      beforeEach(async () => {
            const module: TestingModule = await Test.createTestingModule({
                  controllers: [UsersController],
                  providers: [UsersService],
            }).compile();

            controller = module.get<UsersController>(UsersController);
      });

      /********************************************************************
       * TESTS FOR POST METHOD | {@link UsersController.create}
       ********************************************************************/

      /**
       * email validation test
       */
      it('should return 400 Bad Request if email field is not a valid email.', () => {

      });

      it('should not create a new user with already existing email', () => {

      });

      /**
       *  password validation test
       */
      it('should return 400 Bad Request if password field is less than 8 characters.', () => {

      });

      /**
       *  role validation test
       */
      it('should return 400 Bad Request if role field is neither "employee", nor "employer".', () => {

      });

      /**
       *  Sucessfully creating a user
       */
      it('should return 201 Created and userID field in the response body for a successful user creation', () => {

      });

});
