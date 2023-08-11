import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private clientsService: ClientsService, private router: Router) {}

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const firstName = this.signupForm.value.firstName;
    const lastName = this.signupForm.value.lastName;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    if (!email || !password || !firstName || !lastName) return;
    if (this.signupForm.valid) {
      this.createUser({ firstName, lastName, email, password });
    }
  }

  createUser(credentials: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    this.clientsService
      .createClient(credentials)
      .subscribe(() => this.router.navigate(['/login']));
  }
}
