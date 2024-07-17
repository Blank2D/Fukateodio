import { ChangeDetectorRef, Component, input } from '@angular/core';
import { Result, Root } from '../../../shared/interfaces/personaje.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.scss',
})
export class PersonajeCardComponent {
  personaje = input.required<Result>();

  getRandomNumber(): number {
    return Math.floor(Math.random() * 30) + 1;
  }

  followers: string;
  likes: string;
  posts: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.followers = this.generateRandomNumber(2000000);
    this.likes = this.generateRandomNumber(2000000);
    this.posts = this.generateRandomNumber(500); // Limitar posts a un máximo de 500
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  generateRandomNumber(max: number): string {
    const num = Math.floor(Math.random() * max) + 1;
    return this.abbreviateNumber(num);
  }

  abbreviateNumber(value: number): string {
    if (value < 1000) {
      return value.toString();
    } else if (value < 10000) {
      return (value / 1000).toFixed(1) + 'K';
    } else if (value < 1000000) {
      return Math.floor(value / 1000) + 'K';
    } else {
      return (value / 1000000).toFixed(1) + 'M';
    }
  }
}
