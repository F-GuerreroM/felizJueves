import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      clave: ['', [Validators.required]]
    });
  }

  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { usuario, clave } = this.loginForm.value;

    // --- LÓGICA DE REDIRECCIÓN ---
    
    // CASO 1: Admin
    if (usuario === 'admin' && clave === 'admin123') {
       console.log('Bienvenido Admin');
       this.router.navigate(['/admin']);
    } 
    // CASO 2: Usuario Otaku Normal 
    else if (clave === '123456') { 
       console.log('Login exitoso, yendo al menú...');       
      
       this.router.navigate(['/menu']); 
    } 
    // CASO 3: Error
    else {
      this.errorMsg = 'Usuario o contraseña incorrectos.';
    }
  }
}