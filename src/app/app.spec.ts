import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router'; 

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();
  });

  // Prueba 1: Verificar que la App se crea sin errores
  it('Debería crear la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Prueba 2: Verificar que existe el Header (Navbar)
  it('Debería renderizar el menú de navegación', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
   
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });
});