import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'; // Importar OnInit
import { CommonModule, isPlatformBrowser } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <--- AGREGAMOS ESTO para usar ngModel

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // <--- Importamos FormsModule
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {
  
  // Lista inicial (si está vacío el localStorage, usamos estos por defecto)
  usuarios: any[] = [
    { id: 1, nombre: 'Admin Supremo', email: 'admin@felizjueves.cl', rol: 'Admin' },
    { id: 2, nombre: 'Usuario Base', email: 'test@anime.com', rol: 'Usuario' }
  ];

  // Variable para cumplir con el requisito de "ngModel" (Filtro de búsqueda)
  filtroNombre: string = ''; 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Intentamos cargar usuarios del localStorage
      const guardados = localStorage.getItem('usuarios');
      if (guardados) {
        // Si existen, los fusionamos o reemplazamos. 
        // Aquí concatenamos los nuevos registros a los base:
        const nuevosUsuarios = JSON.parse(guardados);
        this.usuarios = [...this.usuarios, ...nuevosUsuarios];
        
        // Truco para eliminar duplicados si recargas muchas veces (opcional)
        this.usuarios = this.usuarios.filter((v,i,a)=>a.findIndex(t=>(t.email === v.email))===i);
      }
    }
  }

  eliminarUsuario(email: string) {
    if(confirm('¿Eliminar usuario?')) {
      this.usuarios = this.usuarios.filter(u => u.email !== email);
      // Actualizamos localStorage también
      if (isPlatformBrowser(this.platformId)) {
         localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
      }
    }
  }
}