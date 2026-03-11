import { Module } from '@nestjs/common';
import { ProjectServiceController } from './project-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProjectService } from './project-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'project-service',
            brokers: ['localhost:9092'],
            allowAutoCreateTopics: true,
          },
          consumer: {
            groupId: 'project-service-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ProjectServiceController],
  providers: [ProjectService],
})
export class ProjectServiceModule { }
