export const UserRole = {
  ADMIN: 'admin',
  STUDENT: 'student',
  TEACHER: 'teacher',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];