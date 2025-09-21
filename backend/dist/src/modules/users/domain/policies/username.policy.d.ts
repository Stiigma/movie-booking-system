import { UsernameEmptyError, UsernameTooShortError, UsernameTooLongError, UsernameForbiddenCharsError } from "./errors/username.errors";
export type UsernamePolicyError = UsernameEmptyError | UsernameTooShortError | UsernameTooLongError | UsernameForbiddenCharsError;
export declare const UsernamePolicy: {
    normalize(value: string): string;
    validate(value: string): UsernamePolicyError[];
    assert(value: string): string;
};
