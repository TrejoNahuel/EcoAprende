import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../form-login/form-login.component';

export type AuthTap = 'login' | 'register';

@Component({
  selector: 'app-tap-layout',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './tap-layout.component.html',
  styleUrl: './tap-layout.component.css'
})
export class TapLayoutComponent {

  activeTab: AuthTap = 'login';

  setActiveTab(tab: AuthTap): void{
    this.activeTab = tab;
  }
}
