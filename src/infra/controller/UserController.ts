import { GetUserById } from "../../applications/GetUserById";
import { PrismaConnection } from "../../infra/database/PrismaConnection";
import UserRepositoryPrisma from "../../infra/database/repository/UserRepositoryPrisma";

export class UserController{
    constructor(){

    }

    async getUserById(){
        const connection = new PrismaConnection().createConnection()
        const userRepository = new UserRepositoryPrisma(connection)
        const users = new GetUserById(userRepository)
        return users
    }
}