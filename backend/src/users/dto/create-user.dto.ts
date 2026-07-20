import type { UserRole } from "../types/user-rol.types";

export class CreateUserDto {
  email: string;
  password: string;
  role: UserRole;
}
