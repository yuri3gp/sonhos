import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/data/repositories/IUserRepository";

type input = { id: number };

export class GetUserById {
	constructor(private readonly user_repository?: IUserRepository) { }

	async execute({ id }: input): Promise<any> {
		const user = new User(
			1,
			"joaquim",
			"joaquim4512@gmail.com",
			"8489df8454zsdfasef",
			Date.now().toLocaleString()
		)
		this.user_repository?.createUser(user)
	}
}
