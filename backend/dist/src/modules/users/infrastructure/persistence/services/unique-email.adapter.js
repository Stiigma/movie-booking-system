"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEmailAdapter = void 0;
const user_orm_entity_1 = require("../user.orm-entity");
class UniqueEmailAdapter {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async isUnique(email) {
        const repo = this.dataSource.getRepository(user_orm_entity_1.UserOrmEntity);
        const found = await repo.findOne({ where: { email } });
        return !found;
    }
}
exports.UniqueEmailAdapter = UniqueEmailAdapter;
//# sourceMappingURL=unique-email.adapter.js.map