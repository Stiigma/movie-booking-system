export declare const Politics: {
    email: {
        normalize(value: string): string;
        validate(value: string): import("./email.policy").EmailPolicyError[];
        assert(value: string): string;
    };
    username: {
        normalize(value: string): string;
        validate(value: string): import("./username.policy").UsernamePolicyError[];
        assert(value: string): string;
    };
    password: {
        normalize(value: string): string;
        validate(value: string): import("./password.policy").PasswordPolicyError[];
        assert(value: string): string;
    };
};
