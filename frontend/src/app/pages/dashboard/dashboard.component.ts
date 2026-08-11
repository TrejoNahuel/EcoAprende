import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  profile$;
  badges$;

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.profile$;
    this.badges$ = this.profileService.badges$;
  }

  ngOnInit(): void {
    this.profileService.refresh().subscribe();
  }
}
