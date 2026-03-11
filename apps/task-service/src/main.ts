import { NestFactory } from '@nestjs/core';
import { TaskServiceModule } from './task-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskServiceModule, {
    transport: Transport.TCP,
    options: {
      port: 3003,
    },
  });
  await app.listen();
  console.log('Task Service is running on port 3003');
}
bootstrap();
