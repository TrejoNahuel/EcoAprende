import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../../services/mission.service';

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-100 border rounded-4 overflow-hidden shadow-sm">
      
      <!-- Cabecera Dinámica -->
      <div class="position-relative d-flex align-items-center justify-content-center ratio ratio-16x9" [ngClass]="missionData.bgClass">
        
        <img *ngIf="missionData.hasImage" [src]="missionData.imageUrl" alt="Mission" class="w-100 h-100 object-fit-cover position-absolute top-0 start-0">
        
        <span class="position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill shadow-sm px-3 py-2 z-1 w-auto h-auto">
          ⭐ {{ mission.points }} XP
        </span>

        <!-- Icono SVG en caso de no tener imagen -->
        <svg *ngIf="!missionData.hasImage" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-75 z-1 m-auto">
          <path d="M2 6c.6.5 1.2 1 2.5 1S7 6.5 7.5 6 8.8 5 10.5 5 13 6.5 13.5 7 14.8 8 16.5 8 19 6.5 19.5 6 20.8 5 22 5"/>
          <path d="M2 12c.6.5 1.2 1 2.5 1S7 12.5 7.5 12 8.8 11 10.5 11 13 12.5 13.5 13 14.8 14 16.5 14 19 12.5 19.5 12 20.8 11 22 11"/>
          <path d="M2 18c.6.5 1.2 1 2.5 1S7 18.5 7.5 18 8.8 17 10.5 17 13 18.5 13.5 19 14.8 20 16.5 20 19 18.5 19.5 18 20.8 17 22 17"/>
        </svg>
      </div>

      <!-- Cuerpo de la Tarjeta -->
      <div class="card-body d-flex flex-column p-4 bg-white z-2">
        <div class="d-flex align-items-center gap-2 small text-secondary mb-3">
          <img [src]="missionData.assigneeAvatar" class="rounded-circle" width="24" height="24">
          <span>Asignada por: <strong class="text-dark">{{ missionData.assigneeName }}</strong></span>
        </div>
        
        <h5 class="fw-bold mb-2 text-dark" [innerHTML]="mission.title"></h5>
        <p class="small text-secondary mb-4 flex-grow-1">{{ mission.description }}</p>
        
        <!-- Footer dinámico -->
        <div class="m-0">
          
          <!-- Variante: Con barra de progreso -->
          <ng-container *ngIf="missionData.isProgressBased; else dateBased">
            <div class="d-flex justify-content-between mb-1 small text-secondary fw-medium">
              <span>Progreso</span>
              <span>{{ missionData.progressStep }} Pasos</span>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar bg-primary" role="progressbar" [style.width.%]="missionData.progressPct"></div>
            </div>
            <button class="btn btn-primary rounded-3 fw-medium w-100">Continuar Misión</button>
          </ng-container>

          <!-- Variante: Con Fecha límite / Timer -->
          <ng-template #dateBased>
            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
              <span [class]="missionData.timeLeftClass + ' fw-semibold small m-0'">
                {{ missionData.timeLeftText }}
              </span>
              <button class="btn rounded-3 fw-medium px-4" [ngClass]="missionData.btnClass">Comenzar</button>
            </div>
          </ng-template>

        </div>
      </div>
    </div>
  `
})
export class MissionCardComponent {
  @Input({ required: true }) mission!: Mission;

  // Objeto mock para mantener la estructura visual limpia y sin errores
  missionData = {
    hasImage: false,
    imageUrl: '',
    bgClass: 'bg-success bg-opacity-10',
    assigneeAvatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    assigneeName: 'Sistema',
    isProgressBased: false,
    progressStep: 0,
    progressPct: 0,
    timeLeftText: '2 días restantes',
    timeLeftClass: 'text-muted',
    btnClass: 'btn-outline-success'
  };
}