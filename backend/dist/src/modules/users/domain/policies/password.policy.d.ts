import { PasswordEmptyError, PasswordTooShortError, PasswordTooLongError, PasswordForbiddenCharsError, PasswordNeedsLetterError, PasswordNeedsNumberError } from "./errors/password.errors";
export type PasswordPolicyError = PasswordEmptyError | PasswordTooShortError | PasswordTooLongError | PasswordForbiddenCharsError | PasswordNeedsLetterError | PasswordNeedsNumberError;
export declare const PasswordPolicy: {
    normalize(value: string): string;
    validate(value: string): PasswordPolicyError[];
    assert(value: string): string;
};
