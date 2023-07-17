import { User } from '../../entities/User';

export interface IUserRepository {
    retrieveUser(input: any): Promise<User | null>;
    createUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(userId: number): Promise<void>;
}
