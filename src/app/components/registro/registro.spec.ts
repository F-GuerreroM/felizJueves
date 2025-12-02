import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

describe('Pruebas Unitarias: RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComponent, ReactiveFormsModule],
      providers: [ provideRouter([]) ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería marcar error si el email no tiene formato válido', () => {
    const emailControl = component.registroForm.get('email');
    emailControl?.setValue('correo-malo');
    expect(emailControl?.valid).toBeFalsy();
  });

  it('Debería detectar si las contraseñas NO coinciden', () => {
    component.registroForm.controls['clave'].setValue('Password123!');
    component.registroForm.controls['confirmClave'].setValue('OtraCosa');
    
    
    component.registroForm.updateValueAndValidity();

    
    const error = component.passwordMatchValidator(component.registroForm);
    expect(error).toEqual({ mismatch: true });
  });

  it('El formulario debería ser válido con datos correctos', () => {
   
    component.registroForm.controls['nombre'].setValue('Naruto');
    component.registroForm.controls['email'].setValue('naruto@konoha.com');   
    component.registroForm.controls['clave'].setValue('Dattebayo1!'); 
    component.registroForm.controls['confirmClave'].setValue('Dattebayo1!');

    expect(component.registroForm.valid).toBeTruthy();
  });
});