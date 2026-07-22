import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'El email debe ser una cadena de texto.' })
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  email!: string;

  @IsString({ message: 'El password debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El password es obligatorio.' })
  password!: string;
}
