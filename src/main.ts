import { config } from 'dotenv'
config()

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

      const config = new DocumentBuilder()
            .setTitle('Company Branches')
            .setDescription('The API for the assignment')
            .setVersion('1.0')
            .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);

      await app.listen(3000);
}
bootstrap();
