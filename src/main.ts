import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,            //removes extra fields
      forbidNonWhitelisted: true, //throws error if extra fields are sent
      transform: true,            //converts payload to expected type
    }
  ))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
