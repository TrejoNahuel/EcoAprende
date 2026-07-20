import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserSessionDto } from './dto/user-session.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
  ) {}

  async registerUser({ email, password, role }: RegisterUserDto): Promise<UserSessionDto> {
    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new HttpException("Email en uso", HttpStatus.CONFLICT);
    }

    const hashedPassword = await this.cryptoService.hashPassword(password);
    
    const createdUser = await this.usersService.create({ email, password: hashedPassword, role });

    return {
      accessToken: 'mock-jwt-token',
      user: {
        id: createdUser.id,
        email: createdUser.email,
        role: createdUser.role,
      }
    }
  }
}
