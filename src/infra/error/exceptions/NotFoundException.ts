import { DEFINE_APP_ERROR } from '../DefineAppError';

export class NotFoundException extends Error {
	constructor(
		readonly message: string = DEFINE_APP_ERROR.NOT_FOUND.message,
		readonly app_error: string = DEFINE_APP_ERROR.NOT_FOUND.app_error,
		readonly status_code = DEFINE_APP_ERROR.NOT_FOUND.status_code,
		readonly resourse?: string
	) {
		super();
	}
}
