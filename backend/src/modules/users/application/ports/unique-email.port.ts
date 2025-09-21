export interface UniqueEmailPort {
    isUnique(email: string): Promise<boolean>;
}

