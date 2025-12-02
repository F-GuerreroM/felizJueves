import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil.html'
})
export class PerfilComponent {
  // Datos simulados del usuario conectado
  usuario = {
    nombre: 'OtakuMaster2025',
    email: 'fan@anime.com',
    nivel: 'Super Saiyan',
    fechaRegistro: '01/12/2024'
  };

  constructor(private router: Router) {}

  cerrarSesion() {
   
    this.router.navigate(['/login']);
  }
}