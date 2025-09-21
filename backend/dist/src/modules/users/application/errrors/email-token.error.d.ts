export declare class EmailTokenError extends Error {
    constructor();
}
export declare class EmailAlreadyInUseError extends Error {
    constructor();
}
export declare class EmailPolicyError extends Error {
    readonly reason: string;
    constructor(reason?: string);
}
