import { normalize } from "path";
import { DomainValidationError } from "../errorrs/domain-validation.error";
import { EmailEmptyError, EmailFormatInvalidError, EmailTooLongError } from "./errors/email.errors";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_EMAIL_LENGTH = 254;

export type EmailPolicyError = EmailEmptyError | EmailTooLongError | EmailFormatInvalidError;

export const EmailPolicy = {
  normalize(value: string): string {
    return (value ?? '').trim().toLowerCase();
  },

  validate(value: string): EmailPolicyError[] {
    const errors: EmailPolicyError[] = [];   // ✅ ya no es never[]

    if (!value || !value.trim()) errors.push(new EmailEmptyError());

    const v = (value ?? '').trim().toLowerCase();
    if (v.length > MAX_EMAIL_LENGTH) errors.push(new EmailTooLongError(MAX_EMAIL_LENGTH));
    if (!EMAIL_REGEX.test(v)) errors.push(new EmailFormatInvalidError());

    return errors;
  },

  assert(value: string): string {
    const errors = this.validate(value);
    if (errors.length) throw new DomainValidationError(errors); // ok: EmailPolicyError extiende DomainError
    return this.normalize(value);
  },
};