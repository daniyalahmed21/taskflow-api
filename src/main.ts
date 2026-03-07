import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
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
