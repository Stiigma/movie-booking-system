import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitUsers1758412210455 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
