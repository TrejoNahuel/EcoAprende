import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-target-progress',
  standalone: true,
  imports: [],
  templateUrl: './target-progress.component.html',
  styleUrl: './target-progress.component.css'
})
export class TargetProgressComponent {
  levelName: string = '';
  points: number = 0;
  porcentaje: number = 0;
  nextPoints: number = 0;
  minPoints: number = 0;
  constructor(private readonly profileService: ProfileService){}

  ngOnInit(){
    this.profileService.profile$.subscribe(res => {
      this.levelName = res.level.name;
      this.points = res.points;
      this.minPoints = res.level.minPoints;
      this.nextPoints = res.nextLevel.minPoints;
      this.porcentaje = (this.points - this.minPoints) / (this.nextPoints - this.minPoints) * 100;
    });
  }
}
