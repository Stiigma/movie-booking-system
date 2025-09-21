export type EstadoUsuario = 'PENDING_VERIFICATION' | 'ACTIVE' | 'SUSPENDED';

export class User {
    constructor(
        public readonly uuid: string,
        public userName: string,
        public email: string,
        public password: string,
        public state: EstadoUsuario = 'PENDING_VERIFICATION',
        public readonly createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
    ) {}

    //method of Frabric: register new user

    static Create(props: {
        uuid: string;
        userName: string;
        email: string;
        password: string;
    }): User {
        return new User(
            props.uuid,
            props.userName,
            props.email.toLowerCase(),
            props.password,
            'PENDING_VERIFICATION',
            new Date(),
            new Date(),
        );
    }


    getPassword(): string {
        return this.password;
    }

    setPassword(newPassword: string): void {
        this.password = newPassword;
        this.updatedAt = new Date();
    }

    getEmail(): string {
        return this.email;
    }
    
    setEmail(newEmail: string): void {
        this.email = newEmail.toLowerCase();
        this.updatedAt = new Date();
    }

    getUserName(): string {
        return this.userName;
    }
    
    setUserName(newUserName: string): void {
        this.userName = newUserName;
        this.updatedAt = new Date();
    }

    activate(): void {
        this.state = 'ACTIVE';
        this.updatedAt = new Date();
    }
    
    suspend(): void {
        this.state = 'SUSPENDED';
        this.updatedAt = new Date();
    }
}