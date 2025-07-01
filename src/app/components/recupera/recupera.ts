import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recupera',
  standalone: true,
  templateUrl: './recupera.html',
  imports: [FormsModule, CommonModule],
})
export class RecuperaComponent {
  correo: string = '';
  mensaje: string = '';
  colorMensaje: string = 'black';

  correosRegistrados = ['otaku@correo.com', 'admin@correo.com'];

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.mensaje = 'Por favor, ingrese un correo válido.';
      this.colorMensaje = 'red';
      return;
    }

    const correoIngresado = this.correo.trim().toLowerCase();

    if (this.correosRegistrados.includes(correoIngresado)) {
      this.mensaje = 'Correo verificado. Se ha enviado un enlace para restablecer la contraseña.';
      this.colorMensaje = 'green';
    } else {
      this.mensaje = 'El correo ingresado no está registrado.';
      this.colorMensaje = 'red';
    }
  }
}
