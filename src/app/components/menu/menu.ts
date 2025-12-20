import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';   

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  
  secciones = [
    { 
      titulo: 'Gestión de Reuniones', 
      link: '/talleres', 
      esExterno: false, 
      img: 'assets/img/reuniones.png', 
      desc: 'Consulta, crea y administra las juntas de la comunidad en tu ciudad.' 
    },
    { 
      titulo: 'Organizar en RRSS', 
      link: 'https://www.facebook.com/events/create/', 
      esExterno: true, 
      img: 'assets/img/intercambios.jpg',
      desc: 'Crea un evento oficial en Facebook para invitar a más personas.' 
    },
    { 
      titulo: 'Top Animes', 
      link: '/tcg',  
      esExterno: false,
      img: 'assets/img/tcg.webp', 
      desc: 'Animes populares del momento.' 
    }
  ];
}