import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/data/repositories/IUserRepository";

export class UpdateUser {
    constructor(private readonly user_repository: IUserRepository) { }

    async execute(user: User): Promise<any> {
        this.user_repository.updateUser(user)
    }
}
