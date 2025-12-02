import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, provideRouter } from '@angular/router'; // Importamos provideRouter

describe('Pruebas Unitarias: LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
   
    router = TestBed.inject(Router);
    spyOn(router, 'navigate'); 

    fixture.detectChanges();
  });

  it('Debería crear el componente Login', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ser inválido si el usuario deja campos vacíos', () => {
    const form = component.loginForm;
    expect(form.valid).toBeFalsy();
  });

  it('Debería redirigir al /menu si la contraseña es correcta (123456)', () => {
    component.loginForm.controls['usuario'].setValue('OtakuFan');
    component.loginForm.controls['clave'].setValue('123456');
    
    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/menu']);
  });

  it('NO debería redirigir si la contraseña es incorrecta', () => {
    component.loginForm.controls['usuario'].setValue('OtakuFan');
    component.loginForm.controls['clave'].setValue('MalaClave');
    
    component.onSubmit();

    expect(router.navigate).not.toHaveBeenCalled();
  });
});