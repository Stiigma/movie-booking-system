import { DomainValidationError } from "../errorrs/domain-validation.error";

import { UsernameEmptyError, UsernameTooShortError, UsernameTooLongError, UsernameForbiddenCharsError } from "./errors/username.errors";

const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 30;

export type UsernamePolicyError = UsernameEmptyError | UsernameTooShortError | UsernameTooLongError | UsernameForbiddenCharsError;

export const UsernamePolicy = {
  normalize(value: string): string {
    return (value ?? '').trim();
  },

  validate(value: string): UsernamePolicyError[] {
    const errors: UsernamePolicyError[] = [];

    if (!value || !value.trim()) errors.push(new UsernameEmptyError());

    const v = (value ?? '').trim();
    if (v.length < MIN_USERNAME_LENGTH) errors.push(new UsernameTooShortError(MIN_USERNAME_LENGTH));
    if (v.length > MAX_USERNAME_LENGTH) errors.push(new UsernameTooLongError(MAX_USERNAME_LENGTH));
    if (/[^a-zA-Z0-9_]/.test(v)) errors.push(new UsernameForbiddenCharsError());

    return errors;
  },

  assert(value: string): string {
    const errors = this.validate(value);
    if (errors.length) throw new DomainValidationError(errors);
    return this.normalize(value);
  },
};