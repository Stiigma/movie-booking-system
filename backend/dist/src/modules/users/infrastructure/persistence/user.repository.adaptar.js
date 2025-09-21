"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmUserRepository = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const user_orm_entity_1 = require("./user.orm-entity");
class TypeOrmUserRepository {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(user_orm_entity_1.UserOrmEntity);
    }
    async withTransaction(work) {
        return this.dataSource.transaction(async () => work());
    }
    async save(user) {
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
    async findByEmail(email) {
        const row = await this.repository.findOneBy({ email: email.toLowerCase() });
        if (!row)
            return null;
        return new user_entity_1.User(row.uuid, row.userName, row.email, row.password, row.state, row.createdAt, row.updatedAt);
    }
    async findById(uuid) {
        const row = await this.repository.findOneBy({ uuid });
        if (!row)
            return null;
        return new user_entity_1.User(row.uuid, row.userName, row.email, row.password, row.state, row.createdAt, row.updatedAt);
    }
    async findAll() {
        const rows = await this.repository.find();
        return rows.map(row => new user_entity_1.User(row.uuid, row.userName, row.email, row.password, row.state, row.createdAt, row.updatedAt));
    }
    async delete(uuid) {
        await this.repository.delete({ uuid });
    }
}
exports.TypeOrmUserRepository = TypeOrmUserRepository;
//# sourceMappingURL=user.repository.adaptar.js.map