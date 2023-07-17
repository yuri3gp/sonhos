export class User {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly email: string,
		readonly password: string,
		readonly createdAt: string
	) {}

	isActive() {
		return true; // Implemente sua lógica para verificar se o usuário está ativo
	}
}