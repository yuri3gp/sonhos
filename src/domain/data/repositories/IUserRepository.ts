import { User } from '../../entities/User';

export interface IUserRepository {
    retrieveUser(): Promise<User[] | User>;
    createUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(userId: number): Promise<void>;
}
