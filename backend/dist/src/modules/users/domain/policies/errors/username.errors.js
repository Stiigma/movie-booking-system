"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameForbiddenCharsError = exports.UsernameInvalidCharsError = exports.UsernameTooLongError = exports.UsernameTooShortError = exports.UsernameEmptyError = void 0;
const domain_error_1 = require("../../errorrs/domain.error");
class UsernameEmptyError extends domain_error_1.DomainError {
    constructor() { super('USERNAME_EMPTY', 'nombreUsuario', 'El nombre de usuario es obligatorio'); }
}
exports.UsernameEmptyError = UsernameEmptyError;
class UsernameTooShortError extends domain_error_1.DomainError {
    constructor(min) { super('USERNAME_TOO_SHORT', 'nombreUsuario', `Mínimo ${min} caracteres`, { min }); }
}
exports.UsernameTooShortError = UsernameTooShortError;
class UsernameTooLongError extends domain_error_1.DomainError {
    constructor(max) { super('USERNAME_TOO_LONG', 'nombreUsuario', `Máximo ${max} caracteres`, { max }); }
}
exports.UsernameTooLongError = UsernameTooLongError;
class UsernameInvalidCharsError extends domain_error_1.DomainError {
    constructor() { super('USERNAME_INVALID_CHARS', 'nombreUsuario', 'Caracteres no permitidos'); }
}
exports.UsernameInvalidCharsError = UsernameInvalidCharsError;
class UsernameForbiddenCharsError extends domain_error_1.DomainError {
    constructor() { super('USERNAME_FORBIDDEN_CHARS', 'nombreUsuario', 'Sólo letras, números y guion bajo (_)'); }
}
exports.UsernameForbiddenCharsError = UsernameForbiddenCharsError;
//# sourceMappingURL=username.errors.js.map