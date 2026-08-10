import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, tap, forkJoin, BehaviorSubject } from "rxjs";

// 1. Actualizamos la interfaz sumando el nextLevel
export interface GetProfileResponse {
  id: number;
  email: string;
  role: string;
  points: number;
  level: {
    id: number;
    name: string;
    minPoints: number;
  };
  nextLevel: {
    name: string;
    minPoints: number;
  } | null;
}

// 2. Creamos la interfaz para las Insignias
export interface Badge {
  name: string;
  earnedAt?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private readonly apiURL = environment.apiUrl;
    
    // Observables del Perfil
    private readonly perfilSource = new BehaviorSubject<GetProfileResponse | null>(null);
    public profile$ = this.perfilSource.asObservable();

    // Observables de las Insignias
    private readonly badgesSource = new BehaviorSubject<Badge[]>([]);
    public badges$ = this.badgesSource.asObservable();

    constructor(private readonly http: HttpClient){}

    setProfile(profileData: GetProfileResponse){
        this.perfilSource.next(profileData);
    }

    setBadges(badgesData: Badge[]){
        this.badgesSource.next(badgesData);
    }

    getProfile(): Observable<GetProfileResponse>{
        return this.http.get<GetProfileResponse>(`${this.apiURL}/users/me`).pipe(
            tap(data => this.setProfile(data))
        );
    }

    getBadges(): Observable<Badge[]> {
        return this.http.get<Badge[]>(`${this.apiURL}/users/me/badges`).pipe(
            tap(data => this.setBadges(data))
        );
    }

    // 3. Método refresh que junta ambas peticiones en paralelo
    refresh(): Observable<[GetProfileResponse, Badge[]]> {
        return forkJoin([
            this.getProfile(),
            this.getBadges()
        ]);
    }
}