import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TalleresComponent implements OnInit {
  talleres: any[] = [];
  errorMsg = '';

  ngOnInit(): void {
    fetch('assets/data/talleres.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        this.talleres = data;
      })
      .catch(err => {
        this.errorMsg = err.message;
        console.error('Error al cargar talleres:', err);
      });
  }
}
