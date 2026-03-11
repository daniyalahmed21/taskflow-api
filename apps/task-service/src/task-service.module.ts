import { Module } from '@nestjs/common';
import { TaskServiceController } from './task-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaskService } from './task-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'task-service',
            brokers: ['localhost:9092'],
            allowAutoCreateTopics: true,
          },
          consumer: {
            groupId: 'task-service-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [TaskServiceController],
  providers: [TaskService],
})
export class TaskServiceModule { }
