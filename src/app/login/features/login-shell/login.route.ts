import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../login/login.component'),
  },
  {
    path: 'registrar',
    loadComponent: () => import('../registrar/registrar.component'),
  },

  {
    path: 'recuperar',
    loadComponent: () => import('../recuperar/recuperar.component'),
  },


  
] as Routes;
