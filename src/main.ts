import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { AppExceptionFilter } from './filters/app-exception.filter';

async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      app.useGlobalPipes(
            new ValidationPipe()
      )
      app.useGlobalFilters(
            new AppExceptionFilter()
      )
      await app.listen(3000);
}
bootstrap();
