import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../form-login/form-login.component';
import { FormRegisterComponent } from '../form-register/form-register.component';

export type AuthTab = 'login' | 'register';

@Component({
  selector: 'app-tab-layout',
  standalone: true,
  imports: [CommonModule, FormLoginComponent, FormRegisterComponent],
  templateUrl: './tab-layout.component.html',
  styleUrl: './tab-layout.component.css'
})
export class TabLayoutComponent {

  activeTab: AuthTab = 'login';

  setActiveTab(tab: AuthTab): void{
    this.activeTab = tab;
  }
}
