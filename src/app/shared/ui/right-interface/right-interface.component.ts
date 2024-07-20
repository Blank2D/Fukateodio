import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faCircleCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { PersonajesService } from '../../../personajes/data-access/personajes.service';
import { Result } from '../../interfaces/personaje.interface';
import { AuthService } from '../../../../app/perfil/data-access/auth.service';

@Component({
  selector: 'app-right-interface',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './right-interface.component.html',
  styleUrls: ['./right-interface.component.scss'],
})
export class RightInterfaceComponent implements OnInit {
  faUserPlus = faUserPlus;
  faCircleCheck = faCircleCheck;
  faUserGroup = faUsers;
  toastMessage: string = 'Seguido con Éxito!';

  suggestedCharacters: Result[] = [];
  isLoggedIn$ = this.authService.isLoggedIn;

  constructor(private personajesService: PersonajesService,private authService: AuthService) {}

  ngOnInit(): void {
    this.loadSuggestedCharacters();
  }

  loadSuggestedCharacters(): void {
    const randomIds = this.generateRandomIds(6, 1, 826);
    this.suggestedCharacters = [];
    randomIds.forEach((id, index) => {
      this.personajesService.getPersonaje(id.toString()).subscribe((character) => {
        this.suggestedCharacters.push(character);
        setTimeout(() => {
          const card = document.getElementsByClassName('suggestion-card')[index] as HTMLElement;
          if (card) {
            card.style.opacity = '0'; 
            card.classList.add('initial');
            setTimeout(() => {
              card.classList.remove('initial');
              card.style.opacity = '1'; 
            }, 500);
          }
        }, index * 300);
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

  FunctionSnackBar(index: number, name: string) {
    this.toastMessage = `${name} Seguido/a con Éxito!`;
    const x = document.getElementById('toast')!;
    x.className = 'show';
    setTimeout(() => {
      x.className = x.className.replace('show', '');
    }, 5000);

    const card = document.getElementsByClassName('suggestion-card')[index] as HTMLElement;
    card.classList.add('fade-out');

    setTimeout(() => {
      this.personajesService.getPersonaje(this.generateRandomIds(1, 1, 826)[0].toString()).subscribe((newCharacter) => {
        this.suggestedCharacters[index] = newCharacter;
        card.classList.remove('fade-out');
        card.classList.add('fade-in-up');

        setTimeout(() => {
          card.classList.remove('fade-in-up');
          card.style.opacity = '1';
        }, 500);
      });
    }, 500); 
  }
}
