"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordPolicy = void 0;
const domain_validation_error_1 = require("../errorrs/domain-validation.error");
const password_errors_1 = require("./errors/password.errors");
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 100;
exports.PasswordPolicy = {
    normalize(value) {
        return (value ?? '').trim();
    },
    validate(value) {
        const errors = [];
        if (!value || !value.trim())
            errors.push(new password_errors_1.PasswordEmptyError());
        const v = (value ?? '').trim();
        if (v.length < MIN_PASSWORD_LENGTH)
            errors.push(new password_errors_1.PasswordTooShortError(MIN_PASSWORD_LENGTH));
        if (v.length > MAX_PASSWORD_LENGTH)
            errors.push(new password_errors_1.PasswordTooLongError(MAX_PASSWORD_LENGTH));
        if (!/[a-zA-Z]/.test(v))
            errors.push(new password_errors_1.PasswordNeedsLetterError());
        if (!/[0-9]/.test(v))
            errors.push(new password_errors_1.PasswordNeedsNumberError());
        if (/[^a-zA-Z0-9]/.test(v))
            errors.push(new password_errors_1.PasswordForbiddenCharsError());
        return errors;
    },
    assert(value) {
        const errors = this.validate(value);
        if (errors.length)
            throw new domain_validation_error_1.DomainValidationError(errors);
        return this.normalize(value);
    },
};
//# sourceMappingURL=password.policy.js.map