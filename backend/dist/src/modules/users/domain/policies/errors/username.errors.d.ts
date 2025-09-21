import { DomainError } from "../../errorrs/domain.error";
export declare class UsernameEmptyError extends DomainError {
    constructor();
}
export declare class UsernameTooShortError extends DomainError {
    constructor(min: number);
}
export declare class UsernameTooLongError extends DomainError {
    constructor(max: number);
}
export declare class UsernameInvalidCharsError extends DomainError {
    constructor();
}
export declare class UsernameForbiddenCharsError extends DomainError {
    constructor();
}
