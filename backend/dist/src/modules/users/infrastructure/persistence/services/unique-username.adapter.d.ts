import { DataSource } from "typeorm";
import { UniqueUsernamePort } from "src/modules/users/application/ports/unique-username.port";
export declare class UniqueUsernameAdapter implements UniqueUsernamePort {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    isUnique(userName: string): Promise<boolean>;
}
