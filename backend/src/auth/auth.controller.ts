import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() dto: RegisterUserDto) {
    return this.authService.registerUser(dto);
  }
  @Post('login')
  @HttpCode(HttpStatus.OK) // Cambia el código de respuesta por defecto (201) a 200 OK
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
