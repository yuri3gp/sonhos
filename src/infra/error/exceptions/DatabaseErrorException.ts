import { DEFINE_APP_ERROR } from '../DefineAppError';

export class DatabaseErrorException extends Error {
	constructor(
		readonly message: string = DEFINE_APP_ERROR.DATABASE_ERROR.message,
		readonly app_error: string = DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
		readonly status_code = DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
		readonly resourse?: string,
		readonly body?: object
	) {
		super();
	}
}
