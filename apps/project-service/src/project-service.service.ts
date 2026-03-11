import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ProjectService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  async createProject(project: { id: number; name: string }) {
    console.log('[PROJECT] Project created, emitting project_created event...');
    await this.kafkaClient.emit('project_created', project);
    console.log('[PROJECT] Event emitted successfully');
  }
}