import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonajeDetailStateService } from '../../data-access/personaje-detail-state.service';

@Component({
  selector: 'app-personajes-detalle',
  standalone: true,
  imports: [CommonModule],
  providers: [PersonajeDetailStateService],
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.scss'],
})
export default class PersonajesDetalleComponent implements OnInit {
  detallesVisible: boolean = false;

  personajeDetailState = inject(PersonajeDetailStateService).state;

  private route = inject(ActivatedRoute);

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
