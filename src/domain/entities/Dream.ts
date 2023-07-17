import { Keyword } from "./Keyword";

export class Dream {
	constructor(
		readonly id: number,
		readonly title: string,
		readonly content: string,
		readonly drawing: string | null,
		readonly date: string,
		readonly keywords: Keyword[]
	) { }
}