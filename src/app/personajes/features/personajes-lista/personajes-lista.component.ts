import { Component, inject } from '@angular/core';
import { PersonajeStateService } from '../../data-access/personajes-state.service';
import { PersonajeCardComponent } from '../../ui/personaje-card/personaje-card.component';
import { PersonajesPublicacioneComponent } from '../../ui/personajes-publicacione/personajes-publicacione.component';

@Component({
  selector: 'app-personajes-lista',
  standalone: true,
  imports: [PersonajeCardComponent, PersonajesPublicacioneComponent],
  templateUrl: './personajes-lista.component.html',
  styleUrls: ['./personajes-lista.component.scss'],
  providers: [PersonajeStateService],
})
export default class PersonajesListaComponent {
  personajeState = inject(PersonajeStateService);
  
  page : number = 1;

  changePage() {
    this.page = this.page + 1
    this.personajeState.changePage$.next(this.page);
    console.log(this.page);
  }
}


