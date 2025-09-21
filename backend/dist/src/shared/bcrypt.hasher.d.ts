import { PasswordHasherPort } from 'src/modules/users/application/ports/password-hasher.port';
export declare class BcryptHasher implements PasswordHasherPort {
    hash(plain: string): Promise<string>;
    compare(plain: string, hash: string): Promise<boolean>;
}
