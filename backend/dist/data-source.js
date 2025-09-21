"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['./src/modules/**/infrastructure/persistence/*.orm-entity.{ts,js}'],
    migrations: ['./migrations/*.ts'],
    synchronize: false,
    logging: false,
});
//# sourceMappingURL=data-source.js.map