import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; // <--- LO QUE PIDE LA PAUTA
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
    // Definición del Formulario Reactivo con todas las validaciones
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]], // Valida formato email
      // Regex compleja: Mayúscula, minúscula, número, caracter especial, 8-20 chars
      clave: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
      ]],
      confirmClave: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Getter para usar 'f.nombre' en el HTML más fácil
  get f() { return this.registroForm.controls; }

  // Validador personalizado para que coincidan las claves
  passwordMatchValidator(form: AbstractControl) {
    return form.get('clave')?.value === form.get('confirmClave')?.value 
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      return; // Si no es válido, no hace nada (los mensajes ya se muestran en HTML)
    }

    // 1. Obtener los datos del formulario
    const nuevoUsuario = {
      id: Date.now(), // Generamos un ID único basado en la fecha
      nombre: this.registroForm.value.nombre,
      email: this.registroForm.value.email,
      rol: 'Usuario' // Por defecto todos son usuarios normales
    };

    // 2. "PASADO DE DATOS": Guardar en localStorage para que el Admin lo vea
    // Primero leemos si ya hay usuarios guardados
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Agregamos el nuevo
    usuariosGuardados.push(nuevoUsuario);
    // Guardamos la lista actualizada
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }
}