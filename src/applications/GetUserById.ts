import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/data/repositories/IUserRepository";

type input = { id: number };

export class GetUserById {
	constructor(private readonly user_repository: IUserRepository) { }

	async execute({ id }: input): Promise<any> {
		const users = await this.user_repository.retrieveUser()
		return users
	}
}
