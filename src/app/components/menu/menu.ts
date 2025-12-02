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
      titulo: 'Reuniones', 
      link: '/talleres', 
      img: 'assets/img/reuniones.png', 
      alt: 'Reuniones Otaku', 
      desc: 'Participa en juntas con otros fans de anime y manga en tu ciudad' 
    },
    { 
      titulo: 'Ventas', 
      link: '/ventas', 
      img: 'assets/img/ventas.png', 
      alt: 'Ventas de Productos', 
      desc: 'Encuentra figuras, merch, mangas y productos únicos' 
    },
    { 
      titulo: 'Cosplays', 
      link: '/cosplays', 
      img: 'assets/img/cosplay.jpg', 
      alt: 'Cosplay', 
      desc: 'Comparte tus creaciones y encuentra inspiración en la comunidad' 
    },
    { 
      titulo: 'Ligas TCG', 
      link: '/tcg', 
      img: 'assets/img/tcg.webp', 
      alt: 'TCG - Juegos de Cartas', 
      desc: 'Únete a torneos de cartas como Pokémon, Yu-Gi-Oh!, y más' 
    },
    { 
      titulo: 'Intercambios y más', 
      link: '/intercambios', 
      img: 'assets/img/intercambios.jpg', 
      alt: 'Intercambios y más', 
      desc: 'Participa en actividades de intercambio, sorteos, desafíos y más eventos' 
    }
  ];
}