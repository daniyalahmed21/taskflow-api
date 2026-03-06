import { Project } from "src/projects/entities/project.entity"
import { User } from "src/users/entities/user.entity"
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: string

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;

    @ManyToOne(() => User, user => user.tasks)
    assignee: User;
}