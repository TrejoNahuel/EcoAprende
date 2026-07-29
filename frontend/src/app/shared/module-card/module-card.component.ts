import { Component, Input } from '@angular/core';
import { ModuleResponse } from '../../services/module.service';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [],
  templateUrl: './module-card.component.html',
})
export class ModuleCardComponent {
  @Input() module!: ModuleResponse;
  
}
