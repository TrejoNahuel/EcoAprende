import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of, delay, tap} from "rxjs";
import { BehaviorSubject } from "rxjs";

export interface ProfileResponse{
    email: string;
    points: number;
    level: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private readonly apiURL = environment.apiUrl;
    private readonly perfilSource = new BehaviorSubject<any>(null);
    public perfil$ = this.perfilSource.asObservable();

    private readonly USE_MOCK = true;

    constructor(private readonly http: HttpClient){}

    private readonly mockData: ProfileResponse = {
        email: 'ivanflores@gmail.com',
        points: 134,
        level: 'Nivel 2'
    }

    setPerfil(datosPerfil: ProfileResponse){
        console.log('🔄 BehaviorSubject actualizando valor:', datosPerfil);
        this.perfilSource.next(datosPerfil);
    }

    getProfile(): Observable<ProfileResponse>{
        if (this.USE_MOCK){
            return of(this.mockData).pipe(
                tap(data => this.setPerfil(data))
            );
        }

        return this.http.get<ProfileResponse>(`${this.apiURL}/profile`).pipe(
            tap(data => this.setPerfil(data))
        );
    }
}