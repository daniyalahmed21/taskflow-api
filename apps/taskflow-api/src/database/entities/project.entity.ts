import { Task } from './task.entity';
import { User } from './user.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, (user) => user.projects)
    owner: User;

    @OneToMany(() => Task, (task) => task.project)
    tasks: Task[];
}
