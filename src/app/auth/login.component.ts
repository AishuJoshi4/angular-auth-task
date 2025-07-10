import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl:'./login.component.scss' ,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  error = '';

  submit() {
    if (this.form.valid) {
      this.auth.login(this.form.value.email, this.form.value.password).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: () => (this.error = 'Invalid credentials')
      });
    }
  }
}
