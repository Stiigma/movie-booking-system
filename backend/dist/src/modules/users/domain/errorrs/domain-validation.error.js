"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainValidationError = void 0;
class DomainValidationError extends Error {
    errors;
    constructor(errors) {
        super('DOMAIN_VALIDATION_FAILED');
        this.errors = errors;
    }
}
exports.DomainValidationError = DomainValidationError;
//# sourceMappingURL=domain-validation.error.js.map