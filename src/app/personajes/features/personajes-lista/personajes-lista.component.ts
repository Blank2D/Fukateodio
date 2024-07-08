import { Component, inject } from '@angular/core';
import { PersonajeStateService } from '../../data-access/personajes-state.service';
import { PersonajesService } from '../../data-access/personajes.service';

@Component({
  selector: 'app-personajes-lista',
  standalone: true,
  imports: [],
  templateUrl: './personajes-lista.component.html',
  styleUrl: './personajes-lista.component.scss',
  providers: [PersonajeStateService, PersonajesService],
})
export default class PersonajesListaComponent {
  personajeState = inject(PersonajeStateService);
  
}
