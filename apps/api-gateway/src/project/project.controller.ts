import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('project')
export class ProjectController {
  constructor(
    @Inject('PROJECT_SERVICE') private projectClient: ClientProxy,
  ) {}

  @Post('create')
  createProject(@Body() data: any) {
    return this.projectClient.send('create_project', data);
  }
}