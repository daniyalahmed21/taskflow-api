import { NestFactory } from '@nestjs/core';
import { ProjectServiceModule } from './project-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProjectServiceModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });
  await app.listen();
  console.log('Project Service is running on port 3002');
}
bootstrap();
