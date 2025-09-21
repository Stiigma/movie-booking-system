import { DomainValidationError } from "../errorrs/domain-validation.error";
import { PasswordEmptyError, PasswordTooShortError, PasswordTooLongError, PasswordForbiddenCharsError, PasswordNeedsLetterError, PasswordNeedsNumberError } from "./errors/password.errors";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 100;

export type PasswordPolicyError = PasswordEmptyError | PasswordTooShortError | PasswordTooLongError | PasswordForbiddenCharsError | PasswordNeedsLetterError | PasswordNeedsNumberError;

export const PasswordPolicy = {
  normalize(value: string): string {
    return (value ?? '').trim();
  },

  validate(value: string): PasswordPolicyError[] {
    const errors: PasswordPolicyError[] = [];

    if (!value || !value.trim()) errors.push(new PasswordEmptyError());

    const v = (value ?? '').trim();
    if (v.length < MIN_PASSWORD_LENGTH) errors.push(new PasswordTooShortError(MIN_PASSWORD_LENGTH));
    if (v.length > MAX_PASSWORD_LENGTH) errors.push(new PasswordTooLongError(MAX_PASSWORD_LENGTH));
    if (!/[a-zA-Z]/.test(v)) errors.push(new PasswordNeedsLetterError());
    if (!/[0-9]/.test(v)) errors.push(new PasswordNeedsNumberError());
    if (/[^a-zA-Z0-9]/.test(v)) errors.push(new PasswordForbiddenCharsError());

    return errors;
  },

  assert(value: string): string {
    const errors = this.validate(value);
    if (errors.length) throw new DomainValidationError(errors);
    return this.normalize(value);
  },
};
