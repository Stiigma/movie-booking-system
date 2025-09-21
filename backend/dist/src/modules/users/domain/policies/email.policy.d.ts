import { EmailEmptyError, EmailFormatInvalidError, EmailTooLongError } from "./errors/email.errors";
export type EmailPolicyError = EmailEmptyError | EmailTooLongError | EmailFormatInvalidError;
export declare const EmailPolicy: {
    normalize(value: string): string;
    validate(value: string): EmailPolicyError[];
    assert(value: string): string;
};
