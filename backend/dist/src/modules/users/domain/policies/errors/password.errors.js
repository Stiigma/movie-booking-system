"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordNeedsSpecialCharError = exports.PasswordNeedsNumberError = exports.PasswordNeedsLetterError = exports.PasswordForbiddenCharsError = exports.PasswordTooLongError = exports.PasswordTooShortError = exports.PasswordEmptyError = void 0;
const domain_error_1 = require("../../errorrs/domain.error");
class PasswordEmptyError extends domain_error_1.DomainError {
    constructor() { super('PASSWORD_EMPTY', 'contrasena', 'La contraseña es obligatoria'); }
}
exports.PasswordEmptyError = PasswordEmptyError;
class PasswordTooShortError extends domain_error_1.DomainError {
    constructor(min) { super('PASSWORD_TOO_SHORT', 'contrasena', `Mínimo ${min} caracteres`, { min }); }
}
exports.PasswordTooShortError = PasswordTooShortError;
class PasswordTooLongError extends domain_error_1.DomainError {
    constructor(max) { super('PASSWORD_TOO_LONG', 'contrasena', `Máximo ${max} caracteres`, { max }); }
}
exports.PasswordTooLongError = PasswordTooLongError;
class PasswordForbiddenCharsError extends domain_error_1.DomainError {
    constructor() { super('PASSWORD_FORBIDDEN_CHARS', 'contrasena', 'Caracteres no permitidos'); }
}
exports.PasswordForbiddenCharsError = PasswordForbiddenCharsError;
class PasswordNeedsLetterError extends domain_error_1.DomainError {
    constructor() { super('PASSWORD_NEEDS_LETTER', 'contrasena', 'Debe incluir al menos una letra'); }
}
exports.PasswordNeedsLetterError = PasswordNeedsLetterError;
class PasswordNeedsNumberError extends domain_error_1.DomainError {
    constructor() { super('PASSWORD_NEEDS_NUMBER', 'contrasena', 'Debe incluir al menos un número'); }
}
exports.PasswordNeedsNumberError = PasswordNeedsNumberError;
class PasswordNeedsSpecialCharError extends domain_error_1.DomainError {
    constructor() { super('PASSWORD_NEEDS_SPECIAL_CHAR', 'contrasena', 'Debe incluir al menos un caracter especial'); }
}
exports.PasswordNeedsSpecialCharError = PasswordNeedsSpecialCharError;
//# sourceMappingURL=password.errors.js.map