import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/root/home.component';

export const routes: Routes = [
    {
        path: 'home', 
        loadChildren: () => import('./pages/home/shell/home.route').then(r => r.HOME_ROUTE)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    // ,
    // {
    //     path: 'header',
    //     loadComponent: () => import('./core/ui/header/header.component').then(c => c.HeaderComponent)
    // }
];
