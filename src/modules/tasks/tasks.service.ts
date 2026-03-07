import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../database/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) { }

    findAll() {
        return this.taskRepository.find();
    }

    create(createTaskDto: any) {
        const task = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(task);
    }
}
