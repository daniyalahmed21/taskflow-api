import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationConsumerController {

  @EventPattern('user_created')
  handleUserCreated(@Payload() data: any) {
    console.log('Send welcome email to:', data.email);
  }
}
