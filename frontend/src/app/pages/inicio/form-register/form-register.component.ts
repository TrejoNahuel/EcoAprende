import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  private readonly fb = inject(FormBuilder);
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
    console.log('active');
    let name = this.registerForm.value.name;
    let lastname = this.registerForm.value.lastname;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    let role = this.registerForm.value.role;

    if(this.registerForm.valid){
      console.log(`${name} - ${lastname} - ${email} - ${password} - ${role}`);
    }
  }

  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  get name(){return this.registerForm.get('name');}
  get lastname(){return this.registerForm.get('lastname');}
}
