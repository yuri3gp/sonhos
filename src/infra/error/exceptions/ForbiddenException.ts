import { DEFINE_APP_ERROR } from '../DefineAppError';

export class ForbiddenException extends Error {
	constructor(
		readonly message: string = DEFINE_APP_ERROR.FORBIDDEN.message,
		readonly app_error: string = DEFINE_APP_ERROR.FORBIDDEN.app_error,
		readonly status_code = DEFINE_APP_ERROR.FORBIDDEN.status_code,
		readonly resourse?: string
	) {
		super();
	}
}
