import { Component } from '@angular/core';
import { PortadaComponent } from '../../pages/inicio/portada/portada.component';
import { TabLayoutComponent } from '../../pages/inicio/login/tab-layout/tab-layout.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [PortadaComponent, TabLayoutComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
