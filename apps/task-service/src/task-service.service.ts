import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class TaskService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  async createTask(task: { id: number; title: string; assignedTo: number }) {
    console.log('[TASK] Task created, emitting task_created event...');
    await this.kafkaClient.emit('task_created', task);
    console.log('[TASK] Event emitted successfully');
  }

  async completeTask(task: { id: number; title: string; assignedTo: number }) {
    console.log('[TASK] Task completed, emitting task_completed event...');
    await this.kafkaClient.emit('task_completed', task);
    console.log('[TASK] Event emitted successfully');
  }
}