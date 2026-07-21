/* import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}   Version vieja */

// Version de prueba
import { Component } from '@angular/core';
// 1. Agregamos RegisterRequest a la importación
import { AuthService, RegisterRequest } from './services/auth.service'; 


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding: 50px; text-align: center;">
      <h2>Prueba de Servicio Auth</h2>
      <button class="btn btn-primary" (click)="probarRegistro()">Probar Registro</button>
    </div>
  `
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  probarRegistro() {
    console.log('Enviando datos al backend...');
    
    // 2. Le decimos a TypeScript que esto es un RegisterRequest
    const datosPrueba: RegisterRequest = { 
      email: 'test@ecoaprende.com',
      password: '123456',
      role: 'student' 
    };

    this.authService.register(datosPrueba).subscribe({
      next: (respuesta) => console.log('¡Éxito! El backend respondió:', respuesta),
      error: (error) => console.error('Ups, hubo un error en la petición:', error)
    });
  }
}