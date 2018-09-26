import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 authForm: FormGroup;

 constructor(private formBuilder: FormBuilder, public authService: AuthService, public snackBar: MatSnackBar, public router: Router) {
  this.createLoginForm();
}

  createLoginForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        this.router.navigate(['/wall']);
      })
      .catch(() => {
        this.snackBar.open('Error de registro, intenta otra vez'
          , null
          , {
            duration: 3000
          });
        });
      }

  onLogin() {
  this.authService.login(this.authForm.value.email, this.authForm.value.password)
  .then(() => {
      this.router.navigate(['/wall']);
    })
  .catch(() => {
      this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
        , null
        , {
          duration: 3000
        });
    });
    }

  onLogout() {
  return this.authService.logout();
   }

  ngOnInit() {
  }
}
