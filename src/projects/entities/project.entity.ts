import { Task } from "src/tasks/entities/task.entity"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => User, (user) => user.projects)
    owner: User

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];
}