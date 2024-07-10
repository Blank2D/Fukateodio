import { Component, input} from '@angular/core';
import { Result } from '../../../shared/interfaces/personaje.interface';
import {  faHouseChimney , faMagnifyingGlass, faUser, faDoorOpen, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-personajes-publicacione',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './personajes-publicacione.component.html',
  styleUrl: './personajes-publicacione.component.scss'
})
export class PersonajesPublicacioneComponent {
  personaje = input.required<Result>();

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  }
  faPlus = faPlus;
  faStar = faStar;
}


