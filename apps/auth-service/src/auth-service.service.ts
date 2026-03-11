import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  async register(user: { id: number; email: string }) {
    try {
      await this.kafkaClient.emit('user_created', user);
    } catch (error) {
      console.log('[AUTH] Error:', error);
    }
  }
}
