import { DomainError } from './domain.error';
export declare class DomainValidationError extends Error {
    readonly errors: DomainError[];
    constructor(errors: DomainError[]);
}
