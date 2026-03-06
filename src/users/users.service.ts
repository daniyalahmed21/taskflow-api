import { Injectable } from "@nestjs/common"

@Injectable()
export class UsersService {
    private users = []

    findAll() {
        return this.users
    }

    create(user: any) {
        if (user) {
            this.users.push(user)
            return this.users
        }
        return "Please provide name and email"
    }

}
