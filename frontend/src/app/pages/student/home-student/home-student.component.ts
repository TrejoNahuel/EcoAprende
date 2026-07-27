import { Component } from '@angular/core';
import { ModuleService, ModuleResponse } from '../../../services/module.service';

@Component({
  selector: 'app-home-student',
  standalone: true,
  imports: [],
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
