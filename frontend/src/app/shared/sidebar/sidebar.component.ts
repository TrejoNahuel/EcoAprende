import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileService, GetProfileResponse } from '../../services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  profile: GetProfileResponse | null = null;
  levelName: string = '';
  points: number = 0;
  porcentaje: number = 0;
  constructor(private readonly profileService: ProfileService){}

  ngOnInit(){
    this.profileService.profile$.subscribe(res => {
      this.profile = res;
      this.levelName = res.level.name;
      this.points = res.points;
      this.porcentaje = (this.points - res.level.minPoints) / (res.nextLevel.minPoints - res.level.minPoints) * 100;
      console.log(`${res.level.minPoints} xp ==== ${this.points}_____${res.nextLevel.minPoints}`);
    });
  }
}
