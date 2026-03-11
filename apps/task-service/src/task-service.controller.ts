import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task-service.service';

@Controller()
export class TaskServiceController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async createTask(): Promise<string> {
    await this.taskService.createTask({ id: 1, title: 'Task 1', assignedTo: 1 });
    return 'Task created';
  }
}
