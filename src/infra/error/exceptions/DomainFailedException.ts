import { DEFINE_APP_ERROR } from '../DefineAppError';

export class DomainFailedException extends Error {
	constructor(
		readonly message: string = DEFINE_APP_ERROR.CONFLICT.message,
		readonly app_error: string = DEFINE_APP_ERROR.CONFLICT.app_error,
		readonly status_code = DEFINE_APP_ERROR.CONFLICT.status_code,
		readonly resourse?: string,
		readonly body?: object
	) {
		super();
	}
}
