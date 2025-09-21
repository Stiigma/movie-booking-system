import { DomainError } from "../../errorrs/domain.error";

export class UsernameEmptyError extends DomainError {
  constructor() { super('USERNAME_EMPTY', 'nombreUsuario', 'El nombre de usuario es obligatorio'); }
}
export class UsernameTooShortError extends DomainError {
  constructor(min: number) { super('USERNAME_TOO_SHORT', 'nombreUsuario', `Mínimo ${min} caracteres`, { min }); }
}
export class UsernameTooLongError extends DomainError {
  constructor(max: number) { super('USERNAME_TOO_LONG', 'nombreUsuario', `Máximo ${max} caracteres`, { max }); }
}

export class UsernameInvalidCharsError extends DomainError {
  constructor() { super('USERNAME_INVALID_CHARS', 'nombreUsuario', 'Caracteres no permitidos'); }
}

export class UsernameForbiddenCharsError extends DomainError {
  constructor() { super('USERNAME_FORBIDDEN_CHARS', 'nombreUsuario', 'Sólo letras, números y guion bajo (_)'); }
}