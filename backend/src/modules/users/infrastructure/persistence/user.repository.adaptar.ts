import { DataSource, Repository } from "typeorm";
import { UserRepositoryPort } from "../../domain/user.repository.port";
import { User } from "../../domain/entities/user.entity";
import { UserOrmEntity } from "./user.orm-entity";

export class TypeOrmUserRepository implements UserRepositoryPort {
    private readonly repository: Repository<UserOrmEntity>;
    
    constructor(private readonly dataSource: DataSource) {
        this.repository = this.dataSource.getRepository(UserOrmEntity);
    }

    async withTransaction<T>(work: () => Promise<T>): Promise<T> {
        return this.dataSource.transaction(async () => work());
    }

    async save(user: User): Promise<void> {
        const row = this.repository.create({
            uuid: user.uuid,
            userName: user.userName,
            email: user.email,
            password: user.getPassword(),
            state: user.state,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
        await this.repository.save(row);
    }

    async findByEmail(email: string): Promise<User | null> {
        const row = await this.repository.findOneBy({ email: email.toLowerCase() });
        if (!row) return null;
        return new User(
            row.uuid,
            row.userName,   
            row.email,
            row.password,
            row.state,
            row.createdAt,
            row.updatedAt,
        );
    }

    async findById (uuid: string): Promise<User | null> {
        const row = await this.repository.findOneBy({ uuid });
        if (!row) return null;
        return new User(
            row.uuid,
            row.userName,   
            row.email,
            row.password,
            row.state,
            row.createdAt,
            row.updatedAt,
        );
    }

    async findAll(): Promise<User[]> {
        const rows = await this.repository.find();
        return rows.map(row => new User(
            row.uuid,
            row.userName,   
            row.email,
            row.password,
            row.state,
            row.createdAt,
            row.updatedAt,
        ));
    }

    async delete(uuid: string): Promise<void> {
        await this.repository.delete({ uuid }); 
        // or await this.repository.delete(uuid);
    }
}