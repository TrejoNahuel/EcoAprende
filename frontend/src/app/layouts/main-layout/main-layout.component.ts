import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  private readonly profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.getProfile().subscribe();
  }
}
