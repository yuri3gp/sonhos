import dotenv from 'dotenv';

if (dotenv) {
	dotenv.config();
}

export const DATABASE_URL = process.env.DATABASE_URL || 'development';
export const PORT = Number(process.env.PORT) || 3000
export const ENV = process.env.ENV