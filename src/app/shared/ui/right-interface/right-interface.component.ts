import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { PersonajesService } from '../../../personajes/data-access/personajes.service';
import { Result } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-right-interface',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './right-interface.component.html',
  styleUrl: './right-interface.component.scss'
})
export class RightInterfaceComponent implements OnInit {
  faUserPlus = faUserPlus;

  suggestedCharacters: Result[] = [];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.loadSuggestedCharacters();
  }

  loadSuggestedCharacters(): void {
    const randomIds = this.generateRandomIds(6, 1, 826);
    this.suggestedCharacters = [];
    randomIds.forEach(id => {
      this.personajesService.getPersonaje(id.toString()).subscribe(character => {
        this.suggestedCharacters.push(character);
      });
    });
  }

  generateRandomIds(count: number, min: number, max: number): number[] {
    const ids = new Set<number>();
    while (ids.size < count) {
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      ids.add(randomId);
    }
    return Array.from(ids);
  }

  onMoreSuggestions(): void {
    this.loadSuggestedCharacters();
  }
}
