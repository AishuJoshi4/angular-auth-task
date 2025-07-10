import { Routes } from '@angular/router';
import { provideAuthGuard } from './core/guards/auth.guard';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/login.routes').then(m => m.LOGIN_ROUTES) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES), canActivate: [provideAuthGuard()] },
  { path: 'list', loadChildren: () => import('./list/list.routes').then(m => m.LIST_ROUTES), canActivate: [provideAuthGuard()] },
];