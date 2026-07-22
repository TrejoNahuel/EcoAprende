import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type AuthTab = 'login' | 'register';

@Component({
  selector: 'app-tab-layout',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './tab-layout.component.html',
  styleUrl: './tab-layout.component.css'
})
export class TabLayoutComponent {}
