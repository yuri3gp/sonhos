import dotenv from 'dotenv';

if (dotenv) {
	dotenv.config();
}

export const DATABASE_URL = process.env.DATABASE_URL || 'development';
export const PORT = Number(process.env.PORT) || 3000
export const ENV = process.env.ENV
export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '3306';
export const DB_NAME = process.env.DB_NAME || 'dream';