import { Project } from './project.entity';
import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project;

    @ManyToOne(() => User, (user) => user.tasks)
    assignee: User;
}
