import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [FormsModule, NgIf, RouterLink],
})
export class LoginComponent {
  usuario = '';
  clave = '';
  errorMsg = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    this.errorMsg = '';

    if (!form.valid) {
      this.errorMsg = 'Por favor completa todos los campos correctamente.';
      return;
    }

    if (this.usuario === 'otaku' && this.clave === '1234') {
      this.router.navigate(['/menu']);
    } else {
      this.errorMsg = 'Usuario o clave incorrectos';
    }
  }
}
