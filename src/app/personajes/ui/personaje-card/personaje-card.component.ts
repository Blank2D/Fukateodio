import { Component, input } from '@angular/core';
import { Result, Root } from '../../../shared/interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.scss'
})
export class PersonajeCardComponent {
  personaje = input.required<Result>();
}
