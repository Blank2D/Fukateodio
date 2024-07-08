import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'personajes',
        loadChildren:() => import('./personajes/features/personajes-shell/personajes.route')
    },
    {
        path: '**',
        redirectTo: 'personajes',
    }
 
];
