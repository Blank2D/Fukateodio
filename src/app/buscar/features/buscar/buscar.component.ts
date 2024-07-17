import { Component, inject } from '@angular/core';
import { PersonajeStateService } from '../../../personajes/data-access/personajes-state.service';
import { PersonajeCardComponent } from '../../../personajes/ui/personaje-card/personaje-card.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [PersonajeCardComponent, ],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss',
  providers: [PersonajeStateService],

})
export default class BuscarComponent {
  personajeState = inject(PersonajeStateService);
  
  page : number = 1;

  changePage() {
    this.page = this.page + 1
    this.personajeState.changePage$.next(this.page);
    console.log(this.page);
  }
}
