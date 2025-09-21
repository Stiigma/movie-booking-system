"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernamePolicy = void 0;
const domain_validation_error_1 = require("../errorrs/domain-validation.error");
const username_errors_1 = require("./errors/username.errors");
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 30;
exports.UsernamePolicy = {
    normalize(value) {
        return (value ?? '').trim();
    },
    validate(value) {
        const errors = [];
        if (!value || !value.trim())
            errors.push(new username_errors_1.UsernameEmptyError());
        const v = (value ?? '').trim();
        if (v.length < MIN_USERNAME_LENGTH)
            errors.push(new username_errors_1.UsernameTooShortError(MIN_USERNAME_LENGTH));
        if (v.length > MAX_USERNAME_LENGTH)
            errors.push(new username_errors_1.UsernameTooLongError(MAX_USERNAME_LENGTH));
        if (/[^a-zA-Z0-9_]/.test(v))
            errors.push(new username_errors_1.UsernameForbiddenCharsError());
        return errors;
    },
    assert(value) {
        const errors = this.validate(value);
        if (errors.length)
            throw new domain_validation_error_1.DomainValidationError(errors);
        return this.normalize(value);
    },
};
//# sourceMappingURL=username.policy.js.map