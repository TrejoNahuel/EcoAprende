import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  showPassword = false;
  message = '';

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
    role: ['', [Validators.required]]
  })

  statePassword(){
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    if (this.registerForm.invalid) return;

    this.message = '';

    const userData = {
      email: this.registerForm.value.email!,
      contrasena: this.registerForm.value.password!,
      rol: this.registerForm.value.role!
    };

    this.authService.register(userData).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.status === 409) {
          this.message = 'Ese correo ya está registrado.';
        } else {
          this.message = 'Ocurrió un error al registrarte. Intentá nuevamente.';
        }
      }
    });
  }

  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  get name(){return this.registerForm.get('name');}
  get lastname(){return this.registerForm.get('lastname');}
}
