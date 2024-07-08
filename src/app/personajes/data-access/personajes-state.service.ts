import { inject, Injectable } from "@angular/core";
import { Root } from '../../shared/interfaces/personaje.interface'; 
import { signalSlice } from "ngxtension/signal-slice";
import { PersonajesService } from "./personajes.service";
import { map } from "rxjs";

interface State{
    personajes: Root[];
    status: 'loading' | 'success' | 'error';
}

@Injectable()

export class PersonajeStateService{

    private personajesService = inject(PersonajesService) ;

    private initialState: State = {
       personajes: [],
       status: 'loading' as const,
      };

    state = signalSlice({
        initialState: this.initialState,
        sources:[
            this.personajesService
            .getPersonajes()
            .pipe(map((personajes) => ({ personajes, status: 'success' as const}))),
        ],
    });


}