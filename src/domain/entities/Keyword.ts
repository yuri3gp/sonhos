import { Dream } from './Dream'

export class Keyword {
	constructor(
		readonly id: number,
		readonly word: string,
		readonly dreams: Dream[]
	) { }
}