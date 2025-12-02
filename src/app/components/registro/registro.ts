import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]], 
      
      clave: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
      ]],
      confirmClave: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  
  get f() { return this.registroForm.controls; }

  
  passwordMatchValidator(form: AbstractControl) {
    return form.get('clave')?.value === form.get('confirmClave')?.value 
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      return; 
    }

    
    const nuevoUsuario = {
      id: Date.now(), 
      nombre: this.registroForm.value.nombre,
      email: this.registroForm.value.email,
      rol: 'Usuario' 
    };

   
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
   
    usuariosGuardados.push(nuevoUsuario);
    
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }
}