import { Component, OnInit } from '@angular/core';
import { ModuleService, ModuleResponse } from '../../../services/module.service';
import { ModuleCardComponent } from '../../../shared/module-card/module-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-modules',
  standalone: true,
  imports: [CommonModule, ModuleCardComponent],
  templateUrl: './all-modules.component.html',
})
export class AllModulesComponent implements OnInit {
  modules: ModuleResponse[] = [];

  constructor(private readonly moduleService: ModuleService) {}

  ngOnInit(): void {
    this.moduleService.getModules().subscribe({
      next: (modules) => {
        this.modules = modules;
      },
      error: (err) => {
        console.error('Error al cargar módulos:', err);
      }
    });
  }
}