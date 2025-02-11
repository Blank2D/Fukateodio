import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../data-access/user.service';
import { FormsModule } from '@angular/forms';
import {
  faCameraRetro,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export default class PerfilComponent {
  faCameraRetro = faCameraRetro;
  faCommentDots = faCommentDots;
  detallesVisible: boolean = false;
  detallesModal: boolean = false;

  PerfilService = inject(UserService);

  toggleDetalles(): void {
    this.detallesVisible = !this.detallesVisible;
  }

  toggleModal(): void {
    this.detallesModal = !this.detallesModal;
  }

  ActualizarPerfil(
    nuevonombre: string,
    nuevonombrePerfil: string,
    nuevodescripcion: string,
    nuevotrabajo: string,
    nuevoorigen: string,
    nuevoresidencia: string,
    nuevoespecie: string,
    nuevogenero: string
  ) {
    this.PerfilService.nombre.set(nuevonombre);
    this.PerfilService.nombrePerfil.set(nuevonombrePerfil);
    this.PerfilService.descripcion.set(nuevodescripcion);
    this.PerfilService.trabajo.set(nuevotrabajo);
    this.PerfilService.origen.set(nuevoorigen);
    this.PerfilService.residencia.set(nuevoresidencia);
    this.PerfilService.especie.set(nuevoespecie);
    this.PerfilService.genero.set(nuevogenero);
    this.toggleModal();
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 40) + 1;
  }
}
