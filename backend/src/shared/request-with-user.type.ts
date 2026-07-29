import { Request } from 'express';
import { UserRole } from '../users/types/user-rol.types';

export interface RequestWithUser extends Request {
  user: {
    id: number;
    email: string;
    role: UserRole
  };
}