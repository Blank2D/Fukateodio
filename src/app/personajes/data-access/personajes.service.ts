import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpSerivce } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { Root } from "../../shared/interfaces/personaje.interface";

@Injectable({providedIn: 'root'})
export class PersonajesService extends BaseHttpSerivce{
    getPersonajes():Observable<Root[]>{
        return this.http.get<any[]>(`${this.apiUrl}/character`);
    }
}