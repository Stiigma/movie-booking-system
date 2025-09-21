import { DomainError } from "../../errorrs/domain.error";
export declare class EmailEmptyError extends DomainError {
    constructor();
}
export declare class EmailTooLongError extends DomainError {
    constructor(max: number);
}
export declare class EmailFormatInvalidError extends DomainError {
    constructor();
}
