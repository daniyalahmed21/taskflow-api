import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TaskServiceController {
  constructor(private readonly taskService: TaskService) { }

  @MessagePattern('create_task')
  async createTask(data: any): Promise<string> {
    await this.taskService.createTask(data);
    return 'Task created';
  }
}
