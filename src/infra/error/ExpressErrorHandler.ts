import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/environment';
import { DEFINE_APP_ERROR } from './DefineAppError';

export function ExpressErrorHandler(error: any, request: Request, response: Response, next: NextFunction) {
	const status_code = error.status_code || DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.status_code;
	if (status_code !== DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.status_code) {
		return response.status(error.status_code).json({
			message: error.message,
			app_error: error.app_error,
			resourse: error?.resourse,
			body: error?.body,
		});
	}
	if (ENV === 'development') {
		console.error(error);
		return response.status(DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.status_code).json({
			message: DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.message,
			error_message: error?.message,
			resourse: error?.resourse,
			body: error?.body,
			error_stack: error?.stack,
		});
	} else {
		return response.status(DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.status_code).json({
			message: DEFINE_APP_ERROR.INTERNAL_SERVER_ERROR.message,
		});
	}
}
