export interface UniqueUsernamePort {
    isUnique(userName: string): Promise<boolean>;
}
