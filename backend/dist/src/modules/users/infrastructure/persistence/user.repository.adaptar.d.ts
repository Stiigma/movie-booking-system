import { DataSource } from "typeorm";
import { UserRepositoryPort } from "../../domain/user.repository.port";
import { User } from "../../domain/entities/user.entity";
export declare class TypeOrmUserRepository implements UserRepositoryPort {
    private readonly dataSource;
    private readonly repository;
    constructor(dataSource: DataSource);
    withTransaction<T>(work: () => Promise<T>): Promise<T>;
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(uuid: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    delete(uuid: string): Promise<void>;
}
