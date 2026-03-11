import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @Get()
  async register(): Promise<string> {
    await this.authServiceService.register({ id: 1, email: 'user1@example.com' });
    return 'User registered';
  }
}
