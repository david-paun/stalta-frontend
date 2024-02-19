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
    },
    {
        path: 'admin',
        loadChildren: ()=> import('./pages/admin/shell/admin.route').then(r => r.ADMIN_ROUTE)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/shell/login.route').then(r => r.LOGIN_ROUTE)
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/shell/settings.route').then(r => r.SETTINGS_ROUTE)
    }
    // ,
    // {
    //     path: 'header',
    //     loadComponent: () => import('./core/ui/header/header.component').then(c => c.HeaderComponent)
    // }
];
