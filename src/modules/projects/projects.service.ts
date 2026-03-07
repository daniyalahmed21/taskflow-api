import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../../database/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
    ) { }

    findAll() {
        return this.projectRepository.find({
            relations: ['owner', 'tasks'],
        });
    }

    create(createProjectDto: any) {
        const project = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(project);
    }
}
