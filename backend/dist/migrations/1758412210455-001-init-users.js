"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUsers1758412210455 = void 0;
class InitUsers1758412210455 {
    name = '001InitUsers1758412210455';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."users_state_enum" AS ENUM('PENDING_VERIFICATION', 'ACTIVE', 'SUSPENDED')`);
        await queryRunner.query(`CREATE TABLE "users" ("uuid" uuid NOT NULL, "email" character varying(255) NOT NULL, "userName" character varying(50) NOT NULL, "password" character varying(255) NOT NULL, "state" "public"."users_state_enum" NOT NULL DEFAULT 'PENDING_VERIFICATION', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_users_email" ON "users" ("email") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."uq_users_email"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_state_enum"`);
    }
}
exports.InitUsers1758412210455 = InitUsers1758412210455;
//# sourceMappingURL=1758412210455-001-init-users.js.map