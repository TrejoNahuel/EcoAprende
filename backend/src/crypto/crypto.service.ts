import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  private readonly saltRounds = 10;

  /**
   * Hashea una contraseña en texto plano.
   */
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.saltRounds);
  }

  /**
   * Compara una contraseña en texto plano con un hash.
   */
  comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
