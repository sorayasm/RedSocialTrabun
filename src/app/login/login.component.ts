import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, public router: Router) {
  this.createLoginForm();
}

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  // Snackbar de error
  onRegister() {
    this.authService.signup(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        console.log('Registro exitoso!');
      })
      .catch(() => {
        // Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error de registro, intenta otra vez'
          , null // No necesitamos botón en el aviso
          , {
            duration: 3000
          });
        });
      }

onLogin() {
this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
.then(() => {
    // Login exitoso, así que celebramos con el usuario (?)
    this.router.navigate(['/wall']);
  })
  .catch(() => {
    // Algo salió mal, avisemos mejor para que reintente
    this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
      , null // No necesitamos botón en el aviso
      , {
        duration: 3000
      });
  });
  }

  onLogout() {
  return this.authService.logout()

   }
  ngOnInit() {
  }
}
