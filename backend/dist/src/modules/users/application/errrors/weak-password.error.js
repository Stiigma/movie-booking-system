"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakPasswordError = void 0;
class WeakPasswordError extends Error {
    reason;
    constructor(reason = 'Password does not meet policy') {
        super('WEAK_PASSWORD');
        this.reason = reason;
    }
}
exports.WeakPasswordError = WeakPasswordError;
//# sourceMappingURL=weak-password.error.js.map