export declare abstract class DomainError extends Error {
    readonly code: string;
    readonly field: string;
    readonly meta?: Record<string, unknown> | undefined;
    constructor(code: string, field: string, message?: string, meta?: Record<string, unknown> | undefined);
}
