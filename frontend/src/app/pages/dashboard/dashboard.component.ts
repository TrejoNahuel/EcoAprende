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

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.profile$;
  }

  ngOnInit(): void {
    this.profileService.refresh().subscribe();
  }
}
