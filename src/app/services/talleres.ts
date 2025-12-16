import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalleresService { 
  private jsonUrl = 'https://raw.githubusercontent.com/F-GuerreroM/felizJueves/refs/heads/master/src/assets/data/talleres.json'; 
  
  
  private talleresSubject = new BehaviorSubject<any[]>([]);
  
  
  talleres$ = this.talleresSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.cargarDatosIniciales();
  }

  
  private cargarDatosIniciales() {
    this.http.get<any[]>(this.jsonUrl).subscribe({
      next: (data) => {
        this.talleresSubject.next(data); 
        console.log('✅ Datos descargados de GitHub correctamente');
      },
      error: (err) => {
        console.error('❌ Error al descargar de GitHub:', err);        
        this.talleresSubject.next([]); 
      }
    });
  }

  
  obtenerTalleres() {
    return this.talleres$;
  }

  
  agregarTaller(taller: any) {
    const actuales = this.talleresSubject.value;
    
    this.talleresSubject.next([...actuales, taller]);
  }

 
  editarTaller(tallerEditado: any) {
    const actuales = this.talleresSubject.value;
    
    const index = actuales.findIndex(t => t.titulo === tallerEditado.titulo);
    
    if(index !== -1) {
      actuales[index] = tallerEditado; 
      this.talleresSubject.next([...actuales]); 
    }
  }

  
  eliminarTaller(titulo: string) {
    const actuales = this.talleresSubject.value;
    const filtrados = actuales.filter(t => t.titulo !== titulo);
    this.talleresSubject.next(filtrados);
  }
}