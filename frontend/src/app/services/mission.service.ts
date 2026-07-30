import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface Mission {
  id: number;
  title: string;
  description: string | null;
  points: number;
  badge: string | null;
  frequency: 'daily' | 'weekly';
}

interface GetMissionsResponse {
  availableMissions: Mission[];
  completedMissions: Mission[];
}

interface CompleteMissionResponse {
  missionId: number;
  points: number;
  badge: string | null;
  completedAt: Date;
}

type CompleteMissionRawResponse = CompleteMissionResponse & {
  completedAt: string;
};

@Injectable({
    providedIn: 'root'
})
export class MissionService {
  private readonly apiURL = environment.apiUrl;

  constructor (
    private readonly http: HttpClient,
  ){}

  getMissions(): Observable<GetMissionsResponse> {
    return this.http.get<GetMissionsResponse>(`${this.apiURL}/missions`);
  }

  completeMission(id: number): Observable<CompleteMissionResponse> {
    return this.http.post<CompleteMissionRawResponse>(`${this.apiURL}/missions/${id}/complete`, {}).pipe(
      map((response) => ({
        ...response,
        completedAt: new Date(response.completedAt),
      }))
    );
  }
}