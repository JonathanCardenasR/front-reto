import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserUseCaseService } from '../../domain/user/application/user-use-case.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
    MatCardModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private _formBuilder = inject(FormBuilder);
  private _userUseCaseService = inject(UserUseCaseService);
  private _router = inject(Router);

  userForm = this._formBuilder.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  signIn() {
    if (this.userForm.valid) {
      this._userUseCaseService
        .signIn(this.userForm.getRawValue())
        .subscribe({
          next: (response) => {
            localStorage.setItem('token-reto', response.token);
            localStorage.setItem('username-reto', response.username);
            localStorage.setItem('id-reto', `${response.id}`);
            this._router.navigate(['task']);
          },
          error: (error) => {
            console.log("Error signing in", error);
          }
        });
    }
  }


}
