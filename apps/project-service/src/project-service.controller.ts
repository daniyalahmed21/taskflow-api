import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project-service.service';

@Controller()
export class ProjectServiceController {
  constructor(private readonly projectService: ProjectService) { }

  @Get()
  async createProject(): Promise<string> {
    await this.projectService.createProject({ id: 1, name: 'Project 1' });
    return 'Project created';
  }
}
