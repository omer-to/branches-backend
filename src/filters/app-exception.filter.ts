import {
      ExceptionFilter,
      Catch,
      ArgumentsHost,
      HttpException,
      BadRequestException,
      InternalServerErrorException,
} from '@nestjs/common';
import { MongoError } from 'mongodb'
import * as mongoose from 'mongoose'

import type { Response } from 'express';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
      catch(exception: unknown, host: ArgumentsHost) {
            const ctx = host.switchToHttp(),
                  response = ctx.getResponse<Response>();

            let exceptionResponse: HttpException;
            switch (true) {
                  // TODO: Handle MongoError based on the code provided.
                  case exception instanceof MongoError:
                  case exception instanceof mongoose.Error:
                        const mongoError = exception as MongoError
                        exceptionResponse = new BadRequestException(mongoError.message)
                        break;
                  case exception instanceof HttpException:
                        exceptionResponse = exception as HttpException
                        break;
                  default:
                        exceptionResponse = new InternalServerErrorException()
                        break;
            }
            const exceptionStatus = exceptionResponse.getStatus()
            response.status(exceptionStatus).json(exceptionResponse.getResponse())
      }
}