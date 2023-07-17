import { IUserRepository } from "../domain/data/repositories/IUserRepository";

type input = { id: number };

export class GetUserById {
	constructor(private readonly user_repository ?: IUserRepository) {}

	async execute({ id }: input): Promise<any> {

	}
}
