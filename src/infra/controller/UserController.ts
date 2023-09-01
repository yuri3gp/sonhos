import { GetUsers } from "../../applications/user/GetUsers";
import { PrismaConnection } from "../../infra/database/PrismaConnection";
import UserRepositoryPrisma from "../../infra/database/repository/UserRepositoryPrisma";

export class UserController {
    constructor() {

    }

    async findAll() {
        const connection = new PrismaConnection().createConnection()
        const userRepository = new UserRepositoryPrisma(connection)
        const getUsers = new GetUsers(userRepository)
        const users = await getUsers.execute()
        return users
    }

    async findOne(id:number){
        const connection = new PrismaConnection().createConnection()
        const userRepository = new UserRepositoryPrisma(connection)
    }
}