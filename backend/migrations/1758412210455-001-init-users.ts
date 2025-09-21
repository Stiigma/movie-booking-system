import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUsers1758412210455 implements MigrationInterface {
    name = '001InitUsers1758412210455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_state_enum" AS ENUM('PENDING_VERIFICATION', 'ACTIVE', 'SUSPENDED')`);
        await queryRunner.query(`CREATE TABLE "users" ("uuid" uuid NOT NULL, "email" character varying(255) NOT NULL, "userName" character varying(50) NOT NULL, "password" character varying(255) NOT NULL, "state" "public"."users_state_enum" NOT NULL DEFAULT 'PENDING_VERIFICATION', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_users_email" ON "users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."uq_users_email"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_state_enum"`);
    }

}
