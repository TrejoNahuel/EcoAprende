import { Component } from '@angular/core';
import { ModuleService, ModuleResponse } from '../../../services/module.service';
import { ModuleCardComponent } from '../../../shared/module-card/module-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-student',
  standalone: true,
  imports: [ModuleCardComponent, CommonModule],
  templateUrl: './home-student.component.html',
  styleUrl: './home-student.component.css'
})
export class HomeStudentComponent {
  modules: ModuleResponse[] = [];
  constructor(private readonly moduleService: ModuleService){}
  ngOnInit(){
    this.moduleService.getModules().subscribe(modules => {
      this.modules = modules;
    })
  }
}
