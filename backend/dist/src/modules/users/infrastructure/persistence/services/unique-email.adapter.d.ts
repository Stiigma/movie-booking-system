import { DataSource } from "typeorm";
import { UniqueEmailPort } from "../../../application/ports/unique-email.port";
export declare class UniqueEmailAdapter implements UniqueEmailPort {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    isUnique(email: string): Promise<boolean>;
}
