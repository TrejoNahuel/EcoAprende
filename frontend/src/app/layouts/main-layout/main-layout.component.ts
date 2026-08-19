import { Component, inject, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ProfileService } from '../../services/profile.service';
import { MobileMenuComponent } from '../../shared/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MobileMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  currentTitle = '';

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.getProfile().subscribe();
    this.updateTitle();

    // Escucha cada cambio de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  private updateTitle(): void {
    let route = this.activatedRoute;
    // Navega hasta el hijo más profundo activo
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.currentTitle = route.snapshot.data['title'] || '';
  }
}
