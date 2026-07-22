import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserSessionDto } from './dto/user-session.dto';
import { JwtService } from '@nestjs/jwt'; // <-- Para generar el token real
import * as bcrypt from 'bcrypt'; // <-- Para comparar contraseñas
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser({
    email,
    password,
    role,
  }: RegisterUserDto): Promise<UserSessionDto> {
    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new HttpException('Email en uso', HttpStatus.CONFLICT);
    }

    const hashedPassword = this.cryptoService.hashPassword(password);

    const createdUser = await this.usersService.create({
      email,
      password: hashedPassword,
      role,
    });

    return {
      accessToken: 'mock-jwt-token',
      user: {
        id: createdUser.id,
        email: createdUser.email,
        role: createdUser.role,
      },
    };
  }
  async login(loginDto: LoginDto): Promise<UserSessionDto> {
    // 1. Buscar el usuario
    const user = await this.usersService.findByEmail(loginDto.email);

    // 2. Si no existe, lanzamos el error genérico
    if (!user) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    // 3. Comparar contraseñas
    // (Usamos bcrypt directo como pide tu ticket)
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    // 4. Si la clave es incorrecta, lanzamos el MISMO error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    // 5. Si todo está perfecto, creamos el Payload y firmamos el token real
    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
