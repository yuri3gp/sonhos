import { GetUsers } from "../../applications/GetUsers";
import { PrismaConnection } from "../../infra/database/PrismaConnection";
import UserRepositoryPrisma from "../../infra/database/repository/UserRepositoryPrisma";

export class UserController{
    constructor(){

    }

    async getUsers(){
        const connection = new PrismaConnection().createConnection()
        const userRepository = new UserRepositoryPrisma(connection)
        const users = new GetUsers(userRepository)
        return users
    }
}