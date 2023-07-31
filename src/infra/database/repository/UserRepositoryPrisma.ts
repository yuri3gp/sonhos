import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/data/repositories/IUserRepository";
import { RepositoryDefault } from "./RepositoryDefault";
import { PrismaClient } from "@prisma/client";
import { DatabaseErrorException } from "../../../infra/error/exceptions/DatabaseErrorException";
import { DEFINE_APP_ERROR } from "../../../infra/error/DefineAppError";

export default class UserRepositoryPrisma extends RepositoryDefault implements IUserRepository {
    constructor(
        readonly connection: PrismaClient
    ) {
        super();
    }
    async retrieveUser(): Promise<User[] | User> {
        try {
            return await this.connection.user.findMany()
        } catch (error: any) {
            throw new DatabaseErrorException(
                DEFINE_APP_ERROR.DATABASE_ERROR.message,
                DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
                DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
                'IntegracaoRepositoryPrisma.createIntegracao',
                error
            );
        }
    }
    async createUser(user: any): Promise<void> {
        try {
            await this.connection.user.create({
                data: user
            })
        } catch (error: any) {
            throw new DatabaseErrorException(
                DEFINE_APP_ERROR.DATABASE_ERROR.message,
                DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
                DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
                'IntegracaoRepositoryPrisma.createIntegracao',
                error
            );
        }
    }
    async updateUser(user: any): Promise<void> {
        try {
            await this.connection.user.update({
                where: { id: user.id },
                data: user
            })
        } catch (error: any) {
            throw new DatabaseErrorException(
                DEFINE_APP_ERROR.DATABASE_ERROR.message,
                DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
                DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
                'IntegracaoRepositoryPrisma.createIntegracao',
                error
            );
        }
    }
    async deleteUser(userId: number): Promise<void> {
        try {
            await this.connection.user.delete({
                where: { id: userId}
            })
        } catch (error: any) {
            throw new DatabaseErrorException(
                DEFINE_APP_ERROR.DATABASE_ERROR.message,
                DEFINE_APP_ERROR.DATABASE_ERROR.app_error,
                DEFINE_APP_ERROR.DATABASE_ERROR.status_code,
                'IntegracaoRepositoryPrisma.createIntegracao',
                error
            );
        }
    }
}