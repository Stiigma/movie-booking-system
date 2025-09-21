"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueUsernameAdapter = void 0;
const user_orm_entity_1 = require("../user.orm-entity");
class UniqueUsernameAdapter {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async isUnique(userName) {
        const repo = this.dataSource.getRepository(user_orm_entity_1.UserOrmEntity);
        const found = await repo.findOne({ where: { userName } });
        return !found;
    }
}
exports.UniqueUsernameAdapter = UniqueUsernameAdapter;
//# sourceMappingURL=unique-username.adapter.js.map