"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFormatInvalidError = exports.EmailTooLongError = exports.EmailEmptyError = void 0;
const domain_error_1 = require("../../errorrs/domain.error");
class EmailEmptyError extends domain_error_1.DomainError {
    constructor() { super('EMAIL_EMPTY', 'correo', 'El correo es obligatorio'); }
}
exports.EmailEmptyError = EmailEmptyError;
class EmailTooLongError extends domain_error_1.DomainError {
    constructor(max) { super('EMAIL_TOO_LONG', 'correo', `Máximo ${max} caracteres`, { max }); }
}
exports.EmailTooLongError = EmailTooLongError;
class EmailFormatInvalidError extends domain_error_1.DomainError {
    constructor() { super('EMAIL_FORMAT_INVALID', 'correo', 'Formato de correo inválido'); }
}
exports.EmailFormatInvalidError = EmailFormatInvalidError;
//# sourceMappingURL=email.errors.js.map