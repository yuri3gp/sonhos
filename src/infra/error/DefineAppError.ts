export const DEFINE_APP_ERROR = {
	INTERNAL_SERVER_ERROR: {
		message: 'Internal server error',
		status_code: 500,
		app_error: 'A0001',
	},
	UNAUTHORIZED: {
		message: 'Unauthorized',
		status_code: 401,
		app_error: 'A0002',
	},
	FORBIDDEN: {
		message: 'Forbidden',
		status_code: 403,
		app_error: 'A0003',
	},
	NOT_FOUND: {
		message: 'Not Found',
		status_code: 404,
		app_error: 'A0004',
	},
	EMPRESA_INVALIDA: {
		message: 'Empresa Invalida',
		status_code: 401,
		app_error: 'A0005',
	},
	DATABASE_ERROR: {
		message: 'Erro para acessar o Database',
		status_code: 500,
		app_error: 'A0006',
	},
	CONFLICT: {
		message: 'Conflict',
		status_code: 422,
		app_error: 'A0007',
	},
};
