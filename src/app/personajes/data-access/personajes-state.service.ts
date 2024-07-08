import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { PersonajesService } from './personajes.service';
import { map } from 'rxjs/operators';
import { Result } from '../../shared/interfaces/personaje.interface'; 

interface State {
  personajes: Result[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class PersonajeStateService {

  private personajesService = inject(PersonajesService);

  private initialState: State = {
    personajes: [],
    status: 'loading'
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.personajesService.getPersonajes().pipe(
        map(response => ({
          personajes: response.results,
          status: 'success' as const
        }))
      )
    ]
  });
}
