import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'; // <--- Importamos Inject y PLATFORM_ID
import { CommonModule, isPlatformBrowser } from '@angular/common'; // <--- Importamos isPlatformBrowser
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [HeaderComponent, RouterOutlet, CommonModule],
})
export class App implements OnInit {
  talleres: any[] = [];

  // 1. Inyectamos el identificador de la plataforma
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // 2. EL TRUCO: Solo ejecutamos esto si es el NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      this.cargarTalleres();
    }
  }

  cargarTalleres() {
    fetch('assets/talleres.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        this.talleres = data;
        console.log('Talleres cargados:', this.talleres);
      })
      .catch(error => console.error('Error al cargar talleres:', error));
  }
}