import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { MenuComponent } from './components/menu/menu';
import { TalleresComponent } from './components/talleres.component';
import { RegistroComponent } from './components/registro/registro';
import { AdminComponent } from './components/admin/admin';
import { RecoverComponent } from './components/recover/recover';
import { PerfilComponent } from './components/perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'recupera', component: RecoverComponent }, 
  { path: 'perfil', component: PerfilComponent },    
  
  { path: '**', redirectTo: 'login' }
];