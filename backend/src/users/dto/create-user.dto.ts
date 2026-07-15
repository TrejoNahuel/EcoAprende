export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export class CreateUserDto {
  email: string;
  password: string;
  role: UserRole;
}
