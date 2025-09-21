"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPolicy = void 0;
const domain_validation_error_1 = require("../errorrs/domain-validation.error");
const email_errors_1 = require("./errors/email.errors");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
exports.EmailPolicy = {
    normalize(value) {
        return (value ?? '').trim().toLowerCase();
    },
    validate(value) {
        const errors = [];
        if (!value || !value.trim())
            errors.push(new email_errors_1.EmailEmptyError());
        const v = (value ?? '').trim().toLowerCase();
        if (v.length > MAX_EMAIL_LENGTH)
            errors.push(new email_errors_1.EmailTooLongError(MAX_EMAIL_LENGTH));
        if (!EMAIL_REGEX.test(v))
            errors.push(new email_errors_1.EmailFormatInvalidError());
        return errors;
    },
    assert(value) {
        const errors = this.validate(value);
        if (errors.length)
            throw new domain_validation_error_1.DomainValidationError(errors);
        return this.normalize(value);
    },
};
//# sourceMappingURL=email.policy.js.map