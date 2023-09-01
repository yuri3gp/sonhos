import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/data/repositories/IUserRepository";

export class DeleteUser {
    constructor(private readonly user_repository: IUserRepository) { }

    async execute(id:number): Promise<any> {
        this.user_repository.deleteUser(id)
    }
}
