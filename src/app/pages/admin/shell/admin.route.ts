import { Route } from "@angular/router";

export const ADMIN_ROUTE: Route[] = [
    {
        path: '',
        loadChildren: () => import('../root/admin.module').then(m => m.AdminModule)
    }
];