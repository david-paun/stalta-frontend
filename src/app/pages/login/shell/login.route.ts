import { Route } from "@angular/router";

export const LOGIN_ROUTE: Route[] = [
    {
        path: '',
        loadChildren: () => import('../root/login.module').then(m => m.LoginModule)
    }
];