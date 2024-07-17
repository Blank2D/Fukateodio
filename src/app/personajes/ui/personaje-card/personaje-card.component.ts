import { Component, input } from '@angular/core';
import { Result, Root } from '../../../shared/interfaces/personaje.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.scss'
})
export class PersonajeCardComponent {
  personaje = input.required<Result>();
}
