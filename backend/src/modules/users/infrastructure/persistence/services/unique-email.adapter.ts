import { DataSource } from "typeorm";
import { UniqueEmailPort } from "../../../application/ports/unique-email.port";
import { UserOrmEntity } from "../user.orm-entity";

export class UniqueEmailAdapter implements UniqueEmailPort {
    constructor(private readonly dataSource: DataSource) {}

    async isUnique(email: string): Promise<boolean> {
    const repo = this.dataSource.getRepository(UserOrmEntity);
    const found = await repo.findOne({ where: { email } });
    return !found;
  }
}