import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { PersonajesService } from './personajes.service';
import { map, switchMap } from 'rxjs/operators';
import { Result } from '../../shared/interfaces/personaje.interface';
import { Observable } from 'rxjs';

interface State {
  personaje: Result | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class PersonajeDetailStateService {

  private personajesService = inject(PersonajesService);

  private initialState: State = {
    personaje: null,
    status: 'loading',
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.personajesService.getPersonaje(id)),
          map((data) => ({ personaje: data, status: 'success' as const }))
        )
    }
  });
}
