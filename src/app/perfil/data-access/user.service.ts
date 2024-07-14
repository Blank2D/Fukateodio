import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    const nombreLocalStorage = localStorage.getItem("nombre");
    const nombrePerfilLocalStorage = localStorage.getItem("nombrePerfil");
    const fotoDePerfilLocalStorage = localStorage.getItem("fotoDePerfil");
    const descripcionLocalStorage = localStorage.getItem("descripcion");
    const especieLocalStorage = localStorage.getItem("especie");
    const fechaDeCreacionCuentaLocalStorage = localStorage.getItem("fechaDeCreacionCuenta");
    const generoLocalStorage = localStorage.getItem("genero");
    const origenLocalStorage = localStorage.getItem("origen");
    const residenciaLocalStorage = localStorage.getItem("residencia");
    const trabajoLocalStorage = localStorage.getItem("trabajo");

    if (nombreLocalStorage) {
      this.nombre.set(nombreLocalStorage);
    }
    if (nombrePerfilLocalStorage) {
      this.nombrePerfil.set(nombrePerfilLocalStorage);
    }
    if (fotoDePerfilLocalStorage) {
      this.fotoDePerfil.set(fotoDePerfilLocalStorage);
    }
    if (descripcionLocalStorage) {
      this.descripcion.set(descripcionLocalStorage);
    }
    if (especieLocalStorage) {
      this.especie.set(especieLocalStorage);
    }
    if (fechaDeCreacionCuentaLocalStorage) {
      this.fechaDeCreacionCuenta.set(fechaDeCreacionCuentaLocalStorage);
    }
    if (generoLocalStorage) {
      this.genero.set(generoLocalStorage);
    }
    if (origenLocalStorage) {
      this.origen.set(origenLocalStorage);
    }
    if (residenciaLocalStorage) {
      this.residencia.set(residenciaLocalStorage);
    }
    if (trabajoLocalStorage) {
      this.trabajo.set(trabajoLocalStorage);
    }
    
  }

  nombre = signal<string>('Vacio');
  nombrePerfil = signal<string>('Vacio');
  fotoDePerfil = signal<string>('https://i.imgflip.com/6h242e.jpg?a471096');
  descripcion = signal<string>('Vacio');
  especie = signal<string>('Vacio');
  fechaDeCreacionCuenta = signal<string>('2024-07-07');
  genero = signal<string>('Vacio');
  origen = signal<string>('Vacio');
  residencia = signal<string>('Vacio');
  trabajo = signal<string>('Vacio');

  guarDatosUsuarioLocalStorage = effect(() => {
    localStorage.setItem('nombre', this.nombre());
    localStorage.setItem('nombrePerfil', this.nombrePerfil());
    localStorage.setItem('fotoDePerfil', this.fotoDePerfil());
    localStorage.setItem('descripcion', this.descripcion());
    localStorage.setItem('especie', this.especie());
    localStorage.setItem('fechaDeCreacionCuenta', this.fechaDeCreacionCuenta());
    localStorage.setItem('genero', this.genero());
    localStorage.setItem('origen', this.origen());
    localStorage.setItem('residencia', this.residencia());
    localStorage.setItem('trabajo', this.trabajo());
  });

  nPost = signal<number>(0);
  nSeguidores = signal<number>(140);
  nSeguidos = signal<number>(237);
}
