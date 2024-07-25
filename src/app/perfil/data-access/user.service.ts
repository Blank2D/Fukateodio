import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
  estado = signal<string>('0'); 
  contraseña = signal<string>('Cris1234');

  constructor() {
    const nombreLocalStorage = localStorage.getItem('nombre');
    const nombrePerfilLocalStorage = localStorage.getItem('nombrePerfil');
    const fotoDePerfilLocalStorage = localStorage.getItem('fotoDePerfil');
    const descripcionLocalStorage = localStorage.getItem('descripcion');
    const especieLocalStorage = localStorage.getItem('especie');
    const fechaDeCreacionCuentaLocalStorage = localStorage.getItem('fechaDeCreacionCuenta');
    const generoLocalStorage = localStorage.getItem('genero');
    const origenLocalStorage = localStorage.getItem('origen');
    const residenciaLocalStorage = localStorage.getItem('residencia');
    const trabajoLocalStorage = localStorage.getItem('trabajo');
    const contraseñaLocalStorage = localStorage.getItem('contraseña');
    const estadoLocalStorage = localStorage.getItem('estado');

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
    if (trabajoLocalStorage) {
      this.trabajo.set(trabajoLocalStorage);
    }
    if (contraseñaLocalStorage) {
      this.contraseña.set(contraseñaLocalStorage);
    }
    if (estadoLocalStorage) {
      this.estado.set(estadoLocalStorage);
    }
  }

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
    localStorage.setItem('contraseña', this.contraseña());
    localStorage.setItem('estado', this.estado());
  });

  validateUser(username: string, password: string): boolean {
    return username === this.nombrePerfil() && password === this.contraseña();
  }

  nPost = signal<number>(0);
  nSeguidores = signal<number>(140);
  nSeguidos = signal<number>(237);
}
