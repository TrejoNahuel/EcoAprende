import type { UserRole } from "../types/user-rol.types";

export class CreateUserDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: UserRole;
}
