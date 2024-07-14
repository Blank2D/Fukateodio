import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../personajes-lista/personajes-lista.component'),
  },
  {
    path: 'personaje/:id',
    loadComponent: () => import('../personajes-detalle/personajes-detalle.component')
  }
] as Routes;
