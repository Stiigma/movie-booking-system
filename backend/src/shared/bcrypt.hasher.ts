import * as bcrypt from 'bcrypt';
import { PasswordHasherPort } from 'src/modules/users/application/ports/password-hasher.port';

const ROUNDS = 10; // para dev; en prod puedes subirlo

export class BcryptHasher implements PasswordHasherPort {
  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, ROUNDS);
  }
  async compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  }
}


