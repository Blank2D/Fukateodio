import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { PersonajesService } from './personajes.service';
import { map, startWith, switchMap, scan } from 'rxjs/operators';
import { Result } from '../../shared/interfaces/personaje.interface'; 
import { Subject } from 'rxjs';

interface State {
  personajes: Result[];
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable()
export class PersonajeStateService {

  private personajesService = inject(PersonajesService);

  private initialState: State = {
    personajes: [],
    status: 'loading',
    page: 1,
  };

  changePage$ = new Subject<number>();

  loadprofiles$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.personajesService.getPersonajes(page).pipe(
      map(response => ({
        personajes: response.results,
        status: 'success' as const
      }))
    ))
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const }))
      ),
      this.loadprofiles$.pipe(
        scan((acc, curr) => ({
          ...acc,
          personajes: [...acc.personajes, ...curr.personajes],
          status: curr.status
        }), this.initialState)
      ),
    ]
  });
}
