import { Component, Input } from '@angular/core';
import { ModuleResponse } from '../../services/module.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.css',
})
export class ModuleCardComponent {
  @Input() module!: ModuleResponse;
  
}
