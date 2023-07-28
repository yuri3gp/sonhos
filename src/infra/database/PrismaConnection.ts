import { PrismaClient } from '@prisma/client';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from '../config/environment';
import { DEFINE_APP_ERROR } from '../error/DefineAppError';
import { DatabaseErrorException } from '../error/exceptions/DatabaseErrorException';

export class PrismaConnection {
	private static prisma: PrismaClient[];
	private static index_connects: string[];

	constructor() { }

	createConnection(
		db_name: string = DB_NAME,
		db_username: string = DB_USERNAME,
		db_password: string = DB_PASSWORD,
		db_host: string = DB_HOST,
		db_port: string = DB_PORT
	): PrismaClient {
		try {
			const url_connect = `mysql://${db_username}:${db_password}@${db_host}:${db_port}/${db_name.toLowerCase()}?connection_limit=1&pool_timeout=2`;
			let index_dbname = PrismaConnection.index_connects.indexOf(db_name);
			if (index_dbname >= 0) {
				return PrismaConnection.prisma[index_dbname];
			}
			PrismaConnection.index_connects.push(db_name);
			PrismaConnection.prisma.push(
				new PrismaClient({
					datasources: {
						db: {
							url: url_connect,
						},
					},
				})
			);
			index_dbname = PrismaConnection.index_connects.indexOf(db_name);
			return PrismaConnection.prisma[index_dbname];
		} catch (error: any) {
			throw new DatabaseErrorException(
				DEFINE_APP_ERROR.DATABASE_ERROR.message,
				DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
				DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
				'PrismaConnection.createConnection',
				error
			);
		}
	}
}
