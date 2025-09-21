export declare class UserOrmEntity {
    uuid: string;
    email: string;
    userName: string;
    password: string;
    state: 'PENDING_VERIFICATION' | 'ACTIVE' | 'SUSPENDED';
    createdAt: Date;
    updatedAt: Date;
}
