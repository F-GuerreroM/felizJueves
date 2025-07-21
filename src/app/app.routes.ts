import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { MenuComponent } from './components/menu/menu';
import { TalleresComponent } from './components/talleres.component'; // Importa el componente

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'talleres', component: TalleresComponent }, // Nueva ruta
  { path: '**', redirectTo: 'login' }
];
