import { Component } from '@angular/core';
import { ProfileService, GetProfileResponse } from '../../services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  profile: GetProfileResponse | null = null;
  constructor(private readonly profileService: ProfileService){}
  
  ngOnInit(){
    this.profileService.profile$.subscribe(res => {
      this.profile = res;
    });
  }
}
