import bcrypt from 'bcrypt';
import { Encrypter } from '../../data/protocols/encrypter';

export class BcryptAdapter implements Encrypter {
  constructor(private salt: number) {}

  async encrypt(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.salt);

    return hashedPassword;
  }
}
