import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- IMPORTANTE PARA EL FORMULARIO
import { RouterLink } from '@angular/router';
import { TalleresService } from '../../app/services/talleres'; // Asegura la ruta correcta

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // <--- Agregar FormsModule
  templateUrl: './talleres.component.html', // O tu html
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {
  listaTalleres: any[] = [];
  
  // Objeto para el formulario (Modelo)
  nuevoTaller = { 
    titulo: '', 
    descripcion: '', 
    lugar: '', 
    hora: '', 
    img: 'assets/img/reuniones.png' // Imagen por defecto
  };
  
  modoEdicion = false; // Bandera para saber si guardamos o actualizamos

  constructor(private talleresService: TalleresService) {}

  ngOnInit(): void {
    // Nos suscribimos al servicio (Esto reemplaza tu fetch antiguo)
    this.talleresService.obtenerTalleres().subscribe(data => {
      this.listaTalleres = data;
    });
  }

  // Cargar datos en el formulario para editar
  editar(taller: any) {
    this.nuevoTaller = { ...taller }; // Copia para no modificar la tarjeta directo
    this.modoEdicion = true;
    
    // Scroll suave hacia arriba para ver el formulario
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Guardar (Crear o Actualizar)
  guardar() {
    if (this.modoEdicion) {
      this.talleresService.editarTaller({...this.nuevoTaller});
      this.modoEdicion = false;
    } else {
      this.talleresService.agregarTaller({...this.nuevoTaller});
    }
    this.limpiarForm();
  }

  // Eliminar
  eliminar(titulo: string) {
    if(confirm('¿Estás seguro de cancelar este evento?')) {
      this.talleresService.eliminarTaller(titulo);
    }
  }

  limpiarForm() {
    this.nuevoTaller = { titulo: '', descripcion: '', lugar: '', hora: '', img: 'assets/img/reuniones.png' };
    this.modoEdicion = false;
  }
}