import { DomainError } from "../../errorrs/domain.error";

export class EmailEmptyError extends DomainError {
  constructor() { super('EMAIL_EMPTY', 'correo', 'El correo es obligatorio'); }
}
export class EmailTooLongError extends DomainError {
  constructor(max: number) { super('EMAIL_TOO_LONG', 'correo', `Máximo ${max} caracteres`, { max }); }
}
export class EmailFormatInvalidError extends DomainError {
  constructor() { super('EMAIL_FORMAT_INVALID', 'correo', 'Formato de correo inválido'); }
}
