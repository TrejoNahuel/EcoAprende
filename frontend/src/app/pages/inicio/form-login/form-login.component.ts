import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  selectedRole: 'student' | 'teacher' = 'student';
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  errorMessage = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]]
  })

  selectRole(role: 'student' | 'teacher'): void {
    this.selectedRole = role;
  }

  onSubmit(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    let role = this.selectedRole;

    if(this.loginForm.valid){
      console.log(`${email} - ${password} - ${role}`);
      this.router.navigate(['/home']);
    }
  }

  get email(){return this.loginForm.get('email');}
  get password(){return this.loginForm.get('password');}
}
