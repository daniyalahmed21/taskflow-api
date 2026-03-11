import { Controller } from '@nestjs/common';
import { ProjectService } from './project-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProjectServiceController {
  constructor(private readonly projectService: ProjectService) { }

  @MessagePattern('create_project')
  async createProject(data: any): Promise<string> {
    await this.projectService.createProject(data);
    return 'Project created';
  }
}
