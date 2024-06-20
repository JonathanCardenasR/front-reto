import { Routes } from '@angular/router';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { authGuard } from './infrastructure/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },{
        path: 'task',
        loadComponent: () => import('./ui/task-page/task-page.component').then(m => m.TaskPageComponent),
        canActivate: [authGuard],
    }
];
