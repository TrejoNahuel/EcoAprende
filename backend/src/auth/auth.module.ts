import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CryptoModule } from 'src/crypto/crypto.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, CryptoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
