import { Controller } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) { }

  @MessagePattern('register_user')
  async register(data: any): Promise<string> {
    await this.authServiceService.register(data);
    return 'User registered';
  }
}
