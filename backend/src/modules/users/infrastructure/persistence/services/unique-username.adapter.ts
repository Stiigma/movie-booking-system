import { DataSource } from "typeorm";
import { UniqueUsernamePort } from "src/modules/users/application/ports/unique-username.port";
import { UserOrmEntity } from "../user.orm-entity";

export class UniqueUsernameAdapter implements UniqueUsernamePort {
    constructor(private readonly dataSource: DataSource) {}
    
    async isUnique(userName: string): Promise<boolean> {
        const repo = this.dataSource.getRepository(UserOrmEntity);
        const found = await repo.findOne({ where: { userName } });
        return !found;
    }
}