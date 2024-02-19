import { Route } from "@angular/router";

export const HOME_ROUTE: Route[] = [
    {
        path: '',
        loadChildren: () => import('../root/home.module').then( m => m.HomeModule)
    }

];