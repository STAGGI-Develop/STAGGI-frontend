import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() userLoggedIn = new EventEmitter<boolean>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (!email || !password) return;

    this.error = '';
    if (this.loginForm.valid) {
      this.authService
        .login({ email, password })
        .pipe(catchError((error) => (this.error = 'Wrong email or password')))
        .subscribe({
          next: () => {
            this.userLoggedIn.emit(true);
            this.router.navigate(['/']);
          },
        });
    } else {
      console.error('Algo salió mal');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
