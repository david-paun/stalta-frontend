import { Route } from "@angular/router";

export const SETTINGS_ROUTE: Route[] = [
    {
        path: '',
        loadChildren: () => import('../root/settings.module').then(m => m.SettingsModule)
    }
];