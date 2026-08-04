import { Component } from '@angular/core';

@Component({
  selector: 'app-add-mission-card',
  standalone: true,
  template: `
    <div class="card h-100 border border-2 border-success border-opacity-50 bg-success bg-opacity-10 rounded-4 shadow-sm text-center"
         style="cursor: pointer; transition: transform 0.2s;"
         onmouseover="this.style.transform='translateY(-3px)'"
         onmouseout="this.style.transform='translateY(0)'">
      <div class="card-body d-flex flex-column align-items-center justify-content-center p-4">
        <div class="bg-white rounded-3 d-flex align-items-center justify-content-center shadow-sm m-0 mb-3" style="width: 48px; height: 48px;">
          <span class="text-success fw-bold fs-4">+</span>
        </div>
        <h6 class="fw-bold mb-2 text-secondary">¿Buscas más?</h6>
        <p class="m-0 small text-secondary">
          Explora el mercado de misiones para ganar XP extra y desbloquear insignias.
        </p>
      </div>
    </div>
  `
})
export class AddMissionCardComponent {}