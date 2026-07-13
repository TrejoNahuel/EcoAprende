import { Injectable } from '@nestjs/common';
import { CryptoService } from './crypto/crypto.service';

@Injectable()
export class AppService {
  constructor(private readonly cryptoService: CryptoService) {}

  getHello(): string {
    const passwordPlana = 'MiPasswordSegura123';

    // Usamos el servicio inyectado
    const passwordHasheada = this.cryptoService.hashPassword(passwordPlana);

    console.log('--- PRUEBA CON CRYPTO SERVICE ---');
    console.log('Original:', passwordPlana);
    console.log('Hasheada:', passwordHasheada);
    console.log('Comparación exitosa?', this.cryptoService.comparePassword(passwordPlana, passwordHasheada));
    console.log('---------------------------------');
    return 'Hello World!';
  }
}
