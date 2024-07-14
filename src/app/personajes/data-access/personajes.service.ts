import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseHttpSerivce } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { Root, Result } from '../../shared/interfaces/personaje.interface';

@Injectable({ providedIn: 'root' })
export class PersonajesService extends BaseHttpSerivce {
  getPersonajes(page: number): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}/character`, {
      params: {
        page: page,
      },
    });
  }
  getPersonaje(id: string): Observable<Result> {
    return this.http.get<Result>(`${this.apiUrl}/character/${id}`);
  }
}
