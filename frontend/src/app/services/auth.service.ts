import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Trae la URL base desde el environment
  private apiUrl = environment.apiUrl;

  // Inyectamos el HttpClient
  constructor(private http: HttpClient) { }

  // Método que recibe los datos y hace el POST al backend
  register(userData: { email: string, contrasena: string, rol: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }
}