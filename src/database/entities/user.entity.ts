import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { Project } from './project.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Task, (task) => task.assignee)
    tasks: Task[];

    @OneToMany(() => Project, (project) => project.owner)
    projects: Project[];

    @Column({ default: 'user' })
    role: string;
}
