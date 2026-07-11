import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortadaComponent } from './feature/inicio/portada/portada.component';
import { TabLayoutComponent } from './feature/inicio/login/tab-layout/tab-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortadaComponent, TabLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
