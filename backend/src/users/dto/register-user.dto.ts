import { IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export class CreateUserDto {
  @IsString({ message: 'El email debe ser una cadena de texto.' })
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  email!: string;

  @IsString({ message: 'El password debe ser una cadena de texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{8,}$/, {
    message: 'El password debe contener al menos una letra mayúscula, minúscula y un número.',
  })
  password!: string;

  @IsString({ message: 'El rol debe ser una cadena de texto.' })
  @IsEnum(UserRole, {
    message: `El rol debe ser uno de los siguientes valores: ${Object.values(UserRole).join(', ')}`,
  })
  role!: UserRole;
}
