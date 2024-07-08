import { Component, inject } from '@angular/core';
import { PersonajeStateService } from '../../data-access/personajes-state.service';


@Component({
  selector: 'app-personajes-lista',
  standalone: true,
  imports: [],
  templateUrl: './personajes-lista.component.html',
  styleUrl: './personajes-lista.component.scss',
  providers: [PersonajeStateService],
})
export default class PersonajesListaComponent {
  personajeState = inject(PersonajeStateService);
}
