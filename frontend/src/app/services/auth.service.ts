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

export interface LoginResponse extends RegisterResponse {}

// 👇 1. ESTO ES LO QUE TE PEDÍA ANGULAR (@Injectable)
@Injectable({
  providedIn: 'root'
})
// 👇 2. AQUÍ DEBE DECIR "class", NO "interface"
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private userRole: UserRole | null = null;
  private userId: number = 0;

  constructor(private readonly http: HttpClient) { }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/auth/register`,
      userData
    );
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/auth/login`,
      credentials
    ).pipe(
      tap(response => {
        this.userRole = response.user.role;
        this.userId = response.user.id;
        localStorage.setItem('token', response.accessToken);
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

  getUserRole(): string | null{
    return this.userRole;
  }

  getUserId(): number {
    return this.userId;
  }
}
