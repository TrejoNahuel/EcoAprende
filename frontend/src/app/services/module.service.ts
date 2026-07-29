import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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

    constructor (
        private readonly http: HttpClient,
    ){}

    getModules(): Observable<ModuleResponse[]>{
        return this.http.get<ModuleResponse[]>(`${this.apiURL}/modules`);
    }
}