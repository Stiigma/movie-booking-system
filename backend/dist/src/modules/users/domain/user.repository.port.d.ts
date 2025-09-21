import { User } from "./entities/user.entity";
export interface UserRepositoryPort {
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(uuid: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(uuid: string): Promise<void>;
    withTransaction?<T>(work: () => Promise<T>): Promise<T>;
}
