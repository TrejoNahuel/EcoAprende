import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  moduleId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.paramMap.get('id');
  }
}