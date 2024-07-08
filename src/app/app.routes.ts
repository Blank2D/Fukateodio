import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'home',
        loadChildren:() => import('./personajes/features/personajes-shell/personajes.route')
    },
    {
        path: 'buscar',
        loadChildren:() => import('./buscar/features/buscar-shell/buscar.route')
    },
    {
        path: 'perfil',
        loadChildren:() => import('./perfil/features/pefil-shell/perfil.route')
    },
    {
        path: 'salir',
        loadChildren:() => import('./salir/features/salir-shell/salir.route')
    },
    {
        path: '',
        loadChildren:() => import('./login/features/login-shell/login.route')

    }
    
 
];
