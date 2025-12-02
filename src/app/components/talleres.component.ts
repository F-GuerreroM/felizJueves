import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css'] 
})
export class TalleresComponent implements OnInit {
  listaTalleres: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      this.cargarDatos();
    }
  }

cargarDatos() {
    
    fetch('assets/data/talleres.json') 
      .then(response => {
        if (!response.ok) {
            throw new Error('No se encontró el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        this.listaTalleres = data;
        console.log('Datos cargados:', this.listaTalleres);
      })
      .catch(error => console.error('Error cargando talleres:', error));
  }
}