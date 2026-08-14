import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  name: string = '';
  lastname: string = '';
  levelName: string = '';
  points: number = 0;
  
  constructor(private readonly profileService: ProfileService){}

  ngOnInit(){
    this.profileService.profile$.subscribe(res => {
      const hasProfile = !!res;

      if (!hasProfile) return;

      this.name = res.name;
      this.lastname = res.lastname;
      this.levelName = res.level.name;
      this.points = res.points;
    });
  }
}
