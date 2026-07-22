import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

export interface LoginRequest {
  email: string;
  password: string;
}

// 👇 1. ESTO ES LO QUE TE PEDÍA ANGULAR (@Injectable)
@Injectable({
  providedIn: 'root'
})
// 👇 2. AQUÍ DEBE DECIR "class", NO "interface"
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/auth/register`,
      userData
    );
  }

  login(credentials: LoginRequest): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${this.apiUrl}/auth/login`,
      credentials
    ).pipe(
      tap(response => {
        localStorage.setItem('token', response.access_token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
