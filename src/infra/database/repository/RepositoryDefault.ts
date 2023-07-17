export abstract class RepositoryDefault {
	constructor() {}

	calculateTakeAndSkip(page: number, per_page: number): Output {
		page = !page || page < 0 ? 0 : Number(page);
		page = page > 0 ? page - 1 : Number(page);
		per_page = !per_page || per_page < 10 ? 10 : Number(per_page);
		const take = per_page > 30 ? 30 : per_page;
		const skip = page * per_page;
		return { take, skip };
	}
}

type Output = {
	take: number;
	skip: number;
};
