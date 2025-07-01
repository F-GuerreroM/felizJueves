import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { MenuComponent } from './components/menu/menu';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: 'login' }
];
