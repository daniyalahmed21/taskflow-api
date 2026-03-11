import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';
import { NotificationConsumer } from './notification.consumer';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'notification-service',
            brokers: ['localhost:9092'],
            allowAutoCreateTopics: true,
          },
          consumer: {
            groupId: 'notification-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [NotificationServiceController, NotificationConsumer],
  providers: [NotificationServiceService],
})
export class NotificationServiceModule { }
