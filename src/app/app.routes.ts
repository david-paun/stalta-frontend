import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/root/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
  },
];
