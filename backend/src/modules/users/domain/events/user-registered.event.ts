export class UserRegistered {
    constructor(
        public readonly uuid: string,
        public readonly userName: string,
        public readonly email: string,
        public readonly createdAt: Date = new Date(),
    ) {}
}

