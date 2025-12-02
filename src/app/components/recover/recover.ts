import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recover.html',
  styleUrls: ['./recover.css'] // Crea el archivo vacío si no existe
})
export class RecoverComponent {
  recoverForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.recoverForm.valid) {
      // Simulación de proceso
      this.mensaje = 'Si el correo existe, recibirás instrucciones en breve.';
      
      // Redirigir al login después de 3 segundos
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    }
  }
}