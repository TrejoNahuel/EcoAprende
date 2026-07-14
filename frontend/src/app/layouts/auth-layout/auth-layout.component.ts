import { Component } from '@angular/core';
import { CoverComponent } from '../../pages/inicio/cover/cover.component';
import { TabLayoutComponent } from '../../pages/inicio/tab-layout/tab-layout.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CoverComponent, TabLayoutComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
