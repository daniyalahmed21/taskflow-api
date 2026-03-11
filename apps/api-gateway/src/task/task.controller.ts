import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('task')
export class TaskController {
    constructor(
        @Inject('TASK_SERVICE') private taskClient: ClientProxy,
    ) { }

    @Post('create')
    createTask(@Body() data: any) {
        return this.taskClient.send('create_task', data);
    }
}