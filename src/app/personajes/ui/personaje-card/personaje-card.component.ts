import { ChangeDetectorRef, Component, input } from '@angular/core';
import { Result } from '../../../shared/interfaces/personaje.interface';
import { CommonModule } from '@angular/common';
import { faUserPlus, faCircleCheck, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
})
export class PersonajeCardComponent {
  personaje = input.required<Result>();

  followers: string;
  likes: string;
  posts: string;
  faUserPlus = faUserPlus;
  faCircleCheck = faCircleCheck;
  faLink = faLink;

  showFollowModal: boolean = false;
  showDetailsModal: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.followers = this.generateRandomNumber(2000000);
    this.likes = this.generateRandomNumber(2000000);
    this.posts = this.generateRandomNumber(500); // Limitar posts a un máximo de 500
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 30) + 1;
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

  followUser(): void {
    this.showFollowModal = true;
  }

  viewDetails(): void {
    this.showDetailsModal = true;
  }

  closeModal(): void {
    this.showFollowModal = false;
    this.showDetailsModal = false;
  }
  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  }
  
  String(input: any){
    return String(input)
  }
}
