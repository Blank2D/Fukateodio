import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../buscar/buscar.component'),
  },
] as Routes;
