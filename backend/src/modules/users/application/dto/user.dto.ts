export type UserDTO = {
    uuid: string;
    userName: string;
    email: string;
    createdAt: Date;
    state: 'PENDING_VERIFICATION' | 'ACTIVE' | 'SUSPENDED';
}