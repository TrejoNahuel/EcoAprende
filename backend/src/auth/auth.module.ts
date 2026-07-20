import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { CryptoModule } from 'src/crypto/crypto.module';

@Module({
  imports: [UsersModule, CryptoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
