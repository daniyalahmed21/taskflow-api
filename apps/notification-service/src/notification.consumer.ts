import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationConsumer {
  private readonly logger = new Logger(NotificationConsumer.name);

  @EventPattern('user_created')
  handleUserCreated(@Payload() data: any) {
    this.logger.log(`User created event received: ${JSON.stringify(data)}`);
  }

  @EventPattern('project_created')
  handleProjectCreated(@Payload() data: any) {
    this.logger.log(`Project created event received: ${JSON.stringify(data)}`);
  }

  @EventPattern('task_created')
  handleTaskCreated(@Payload() data: any) {
    this.logger.log(`Task created event received: ${JSON.stringify(data)}`);
  }

  @EventPattern('task_completed')
  handleTaskCompleted(@Payload() data: any) {
    this.logger.log(`Task completed event received: ${JSON.stringify(data)}`);
  }
}