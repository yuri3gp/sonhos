import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/data/repositories/IUserRepository";

export class GetUsers {
	constructor(private readonly user_repository: IUserRepository) { }

	async execute(): Promise<any> {
		const users = await this.user_repository.retrieveUser()
		return users
	}
}
