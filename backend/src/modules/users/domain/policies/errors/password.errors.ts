import { DomainError } from "../../errorrs/domain.error";

export class PasswordEmptyError extends DomainError {
  constructor() { super('PASSWORD_EMPTY', 'contrasena', 'La contraseña es obligatoria'); }
}
export class PasswordTooShortError extends DomainError {
  constructor(min: number) { super('PASSWORD_TOO_SHORT', 'contrasena', `Mínimo ${min} caracteres`, { min }); }
}
export class PasswordTooLongError extends DomainError {
  constructor(max: number) { super('PASSWORD_TOO_LONG', 'contrasena', `Máximo ${max} caracteres`, { max }); }
}
export class PasswordForbiddenCharsError extends DomainError {
  constructor() { super('PASSWORD_FORBIDDEN_CHARS', 'contrasena', 'Caracteres no permitidos'); }
}
export class PasswordNeedsLetterError extends DomainError {
  constructor() { super('PASSWORD_NEEDS_LETTER', 'contrasena', 'Debe incluir al menos una letra'); }
}
export class PasswordNeedsNumberError extends DomainError {
  constructor() { super('PASSWORD_NEEDS_NUMBER', 'contrasena', 'Debe incluir al menos un número'); }

}

export class PasswordNeedsSpecialCharError extends DomainError {
  constructor() { super('PASSWORD_NEEDS_SPECIAL_CHAR', 'contrasena', 'Debe incluir al menos un caracter especial'); }
}