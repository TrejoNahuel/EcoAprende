import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export type UserRole = 'student' | 'admin' | 'teacher';

export interface RegisterRequest {
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    role: UserRole;
  };
}

// 👇 1. ESTO ES LO QUE TE PEDÍA ANGULAR (@Injectable)
@Injectable({
  providedIn: 'root'
})
// 👇 2. AQUÍ DEBE DECIR "class", NO "interface"
export class AuthService {
  private apiUrl = environment.apiUrl;
  private readonly token = '';
  private readonly userRole = '';

  constructor(private http: HttpClient) { }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/auth/register`,
      userData
    );
  }

  getToken(): string | null {
    return this.token;
  }

  getUserRole(): string | null{
    return this.userRole;
  }
}