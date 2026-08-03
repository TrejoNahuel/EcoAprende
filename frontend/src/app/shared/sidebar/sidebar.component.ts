import { Component } from '@angular/core';
import { ProfileService, ProfileResponse } from '../../services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  perfil: ProfileResponse | null = null;
  constructor(private readonly profileService: ProfileService){}
  
  ngOnInit(){
    this.profileService.perfil$.subscribe(res => {
      console.log('📥 Sidebar recibió del BehaviorSubject:', res);
      this.perfil = res;
    });
  }
}
