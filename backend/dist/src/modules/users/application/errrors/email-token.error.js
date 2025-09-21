"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPolicyError = exports.EmailAlreadyInUseError = exports.EmailTokenError = void 0;
class EmailTokenError extends Error {
    constructor() {
        super('Invalid or expired email token');
    }
}
exports.EmailTokenError = EmailTokenError;
class EmailAlreadyInUseError extends Error {
    constructor() {
        super('Email is already in use');
    }
}
exports.EmailAlreadyInUseError = EmailAlreadyInUseError;
class EmailPolicyError extends Error {
    reason;
    constructor(reason = 'Email does not meet policy') {
        super('EMAIL_POLICY_VIOLATION');
        this.reason = reason;
    }
}
exports.EmailPolicyError = EmailPolicyError;
//# sourceMappingURL=email-token.error.js.map