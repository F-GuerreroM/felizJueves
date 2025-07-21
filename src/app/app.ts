import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [HeaderComponent, RouterOutlet],
})
export class App implements OnInit {
  talleres: any[] = [];

  ngOnInit(): void {
    this.cargarTalleres();
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