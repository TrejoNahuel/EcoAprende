import type { UserRole } from "../../users/types/user-rol.types";

export interface UserSessionDto {
  accessToken: string;
  user: {
    id: number;
    email: string;
    role: UserRole;
  };
}
