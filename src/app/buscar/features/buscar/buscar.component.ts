import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { PersonajeStateService } from '../../../personajes/data-access/personajes-state.service';
import { PersonajeCardComponent } from '../../../personajes/ui/personaje-card/personaje-card.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [PersonajeCardComponent],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
  providers: [PersonajeStateService],
})
export default class BuscarComponent implements OnInit {
  personajeState = inject(PersonajeStateService);
  page: number = 0;
  searchTerm = signal<string>('');
  personajes = computed(() => this.personajeState.state().personajes);
  filteredPersonajes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (term) {
      return this.personajes().filter(personaje =>
        personaje.name.toLowerCase().includes(term)
      );
    } else {
      return this.personajes().slice(0, 200);
    }
  });

  async ngOnInit() {
    // Ejecutar el método changePage 41 veces para cargar todos los personajes
    for (let i = 0; i <= 42; i++) {
      await this.changePage();
    }
  }

  changePage(): Promise<void> {
    return new Promise((resolve) => {
      this.page = this.page + 1;
      this.personajeState.changePage$.next(this.page);
      console.log(this.page);
      setTimeout(() => resolve(), 100); // Espera 100ms antes de resolver para asegurar que la llamada se procese
    });
  }

  onSearchTermChange(event: any) {
    this.searchTerm.set(event.target.value);
  }


}
