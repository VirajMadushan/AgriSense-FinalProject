import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    this.loading = true;

    const { email, password } = this.loginForm.value;

    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.loading = false;

        if (res.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
