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

// Version de prueba del t013
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

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
    
    const datosPrueba = {
      email: 'test@ecoaprende.com',
      contrasena: '123456',
      rol: 'Estudiante'
    };

    this.authService.register(datosPrueba).subscribe({
      next: (respuesta) => console.log('¡Éxito! El backend respondió:', respuesta),
      error: (error) => console.error('Ups, hubo un error en la petición:', error)
    });
  }
}