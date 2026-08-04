import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, tap} from "rxjs";
import { BehaviorSubject } from "rxjs";

export interface GetProfileResponse {
  id: number;
  email: string;
  role: string;
  points: number;
  level: {
    id: number;
    name: string;
    minPoints: number;
  }
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private readonly apiURL = environment.apiUrl;
    private readonly perfilSource = new BehaviorSubject<any>(null);
    public profile$ = this.perfilSource.asObservable();

    constructor(private readonly http: HttpClient){}

    setProfile(profileData: GetProfileResponse){
        this.perfilSource.next(profileData);
    }

    getProfile(): Observable<GetProfileResponse>{
        return this.http.get<GetProfileResponse>(`${this.apiURL}/users/me`).pipe(
            tap(data => this.setProfile(data))
        );
    }
}