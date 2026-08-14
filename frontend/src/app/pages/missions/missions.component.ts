import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { AddMissionCardComponent } from './add-mission-card.component';
import { MissionCardComponent } from './mission-card.component';
import { MissionService, Mission, CompleteMissionResponse } from '../../services/mission.service';
import { TargetProgressComponent } from '../student/target-progress/target-progress.component';

type MissionStatus = 'available' | 'completed';

@Component({
  imports: [AddMissionCardComponent, MissionCardComponent, NgClass, TargetProgressComponent],
  standalone: true,
  selector: 'app-missions',
  templateUrl: './missions.component.html',
})
export class MissionsComponent implements OnInit {
  availableMissions: Mission[] = [];
  completedMissions: Mission[] = [];

  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get selectedMissionStatus(): MissionStatus {
    const defaultStatus = 'available' as MissionStatus;
    const status: MissionStatus = (this.route.snapshot.queryParamMap.get('status') as MissionStatus) || defaultStatus;
    return status;
  }

  ngOnInit(): void {
    this.loadMissions();
  }

  private loadMissions(): void {
    this.missionService.getMissions().subscribe({
      next: (response) => {
        this.availableMissions = response.availableMissions;
        this.completedMissions = response.completedMissions;
      },
      error: (err) => {
        console.error('Error al obtener las misiones', err);
      }
    });
  }

  changeTab(status: MissionStatus): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { status },
      queryParamsHandling: 'merge',
    });
  }

  onMissionCompleted(response: CompleteMissionResponse): void {
    const completedMissionId = response.missionId

    const completedMission = this.availableMissions.find(
      (mission) => mission.id === completedMissionId
    );

    if (completedMission) {
      this.availableMissions = this.availableMissions.filter(
        (mission) => mission.id !== completedMissionId
      );

      this.completedMissions = [completedMission, ...this.completedMissions];
    }

    alert(`¡Ganaste ${response.points} puntos!`);
  }
}
