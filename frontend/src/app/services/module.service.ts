import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, delay } from 'rxjs';
import { AuthService } from "./auth.service";

export interface ModuleResponse {
    id: number;
    title: string;
    description: string;    
}

@Injectable({
    providedIn: 'root'
})
export class ModuleService {
    private readonly apiURL = environment.apiUrl;

    private USE_MOCK = true; // para simular una peticion 
    private mockData: ModuleResponse[] = [
        {id: 1, title: 'Restauracion de bosques', description: 'Aprende las tecnicas de reforestacion y como ...'},
        {id: 2, title: 'Oceanos limpios', description: 'Descubre el impacto del plastico...'},
        {id: 3, title: 'Oceanos limpios', description: 'Descubre el impacto del plastico...'},
        {id: 4, title: 'Oceanos limpios', description: 'Descubre el impacto del plastico...'},
        {id: 5, title: 'Restauracion de bosques', description: 'Aprende las tecnicas de reforestacion y como ...'}
    ]

    constructor (
        private readonly http: HttpClient,
        private readonly authService: AuthService
    ){}

    getModules(): Observable<ModuleResponse[]>{
        const userId = this.authService.getUserId();
        if (this.USE_MOCK){
            return of(this.mockData).pipe(delay(500));
        }
        return this.http.get<ModuleResponse[]>(`${this.apiURL}/users/${userId}/modules`);
    }
}