import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.html',
  imports: [FormsModule, CommonModule],
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  usuario: string = '';
  clave: string = '';
  clave2: string = '';

  errores: string[] = [];

  onSubmit(form: NgForm) {
    this.errores = [];

    if (!form.valid) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.correo)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    if (this.clave.length < 8) this.errores.push('Debe tener al menos 8 caracteres.');
    if (this.clave.length > 20) this.errores.push('No debe exceder los 20 caracteres.');
    if (!/[A-Z]/.test(this.clave)) this.errores.push('Debe incluir al menos una letra mayúscula.');
    if (!/[a-z]/.test(this.clave)) this.errores.push('Debe incluir al menos una letra minúscula.');
    if (!/\d/.test(this.clave)) this.errores.push('Debe incluir al menos un número.');
    if (!/[^A-Za-z0-9]/.test(this.clave)) this.errores.push('Debe incluir al menos un carácter especial.');
    if (this.clave !== this.clave2) this.errores.push('Las contraseñas no coinciden.');

    if (this.errores.length > 0) {
      alert('Error en la contraseña:\n- ' + this.errores.join('\n- '));
      return;
    }

    alert('¡Registro exitoso! Bienvenido a ¡Feliz Jueves!');

    // Simula redirección
    setTimeout(() => {
      window.location.href = '/menu.html';
    }, 500);

    form.resetForm();
  }
}
