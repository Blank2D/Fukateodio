import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonajeDetailStateService } from '../../data-access/personaje-detail-state.service';
import { faCameraRetro, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-personajes-detalle',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  providers: [PersonajeDetailStateService, ],
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.scss'],
})
export default class PersonajesDetalleComponent implements OnInit {

  faCameraRetro =faCameraRetro;
  faCommentDots = faCommentDots;
  detallesVisible: boolean = false;
  followers: string;
  likes: string;
  posts: string;
  personajeDetailState = inject(PersonajeDetailStateService).state;

  private route = inject(ActivatedRoute);

  constructor(private cdr: ChangeDetectorRef) {
    this.followers = this.generateRandomNumber(2000000);
    this.likes = this.generateRandomNumber(2000000);
    this.posts = this.generateRandomNumber(500); // Limitar posts a un máximo de 500
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 40) + 1;
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
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.personajeDetailState.getById(id);
      }
    });
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  }
  toggleDetalles(): void {
    this.detallesVisible = !this.detallesVisible;
  }

  String(input: any){
    return String(input)
  }

  
}
