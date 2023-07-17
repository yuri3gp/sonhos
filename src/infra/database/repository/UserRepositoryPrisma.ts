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
    retrieveUser(input: any): Promise<User | null> {

        throw new Error("Method not implemented.");
    }
    async createUser(user: User): Promise<void> {
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
    updateUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}