export class EmailTokenError extends Error {
    constructor() {
        super('Invalid or expired email token');
    }
}

export class EmailAlreadyInUseError extends Error {
    constructor() {
        super('Email is already in use');
    }
}

export class EmailPolicyError extends Error {
    constructor(public readonly reason = 'Email does not meet policy') {
        super('EMAIL_POLICY_VIOLATION');
    }
}