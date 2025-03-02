import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { loginEmail, loginPassword } = this.loginForm.value;
      this.authService.login({ email: loginEmail, password: loginPassword })
        .subscribe({
          next: (res: any) => {
            // נניח שהשרת מחזיר token אחרי התחברות
            this.authService.saveToken(res.token);
            // מעבר למסך בית/קורסים
            this.router.navigate(['/courses']);
          },
          error: (err: any) => {
            console.error('Login failed', err);
            this.errorMessage = 'התחברות נכשלה. אנא בדוק את הפרטים ונסה שוב.';
          }
        });
    }
  }
}
