export type EstadoUsuario = 'PENDING_VERIFICATION' | 'ACTIVE' | 'SUSPENDED';
export declare class User {
    readonly uuid: string;
    userName: string;
    email: string;
    password: string;
    state: EstadoUsuario;
    readonly createdAt: Date;
    updatedAt: Date;
    constructor(uuid: string, userName: string, email: string, password: string, state?: EstadoUsuario, createdAt?: Date, updatedAt?: Date);
    static Create(props: {
        uuid: string;
        userName: string;
        email: string;
        password: string;
    }): User;
    getPassword(): string;
    setPassword(newPassword: string): void;
    getEmail(): string;
    setEmail(newEmail: string): void;
    getUserName(): string;
    setUserName(newUserName: string): void;
    activate(): void;
    suspend(): void;
}
