import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  async register(user: { id: number; email: string }) {
    try {
      console.log('[AUTH] User registered, emitting user_created event...');
      await this.kafkaClient.emit('user_created', user);
      console.log('[AUTH] Event emitted successfully');
    } catch (error) {
      console.log('[AUTH] Error:', error);
    }
  }
}
