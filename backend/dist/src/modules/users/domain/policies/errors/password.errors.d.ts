import { DomainError } from "../../errorrs/domain.error";
export declare class PasswordEmptyError extends DomainError {
    constructor();
}
export declare class PasswordTooShortError extends DomainError {
    constructor(min: number);
}
export declare class PasswordTooLongError extends DomainError {
    constructor(max: number);
}
export declare class PasswordForbiddenCharsError extends DomainError {
    constructor();
}
export declare class PasswordNeedsLetterError extends DomainError {
    constructor();
}
export declare class PasswordNeedsNumberError extends DomainError {
    constructor();
}
export declare class PasswordNeedsSpecialCharError extends DomainError {
    constructor();
}
