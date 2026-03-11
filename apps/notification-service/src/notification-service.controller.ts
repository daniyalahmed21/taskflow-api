import { Controller } from '@nestjs/common';
import { NotificationServiceService } from './notification-service.service';

@Controller()
export class NotificationServiceController {
  constructor(private readonly notificationService: NotificationServiceService) { }
}
