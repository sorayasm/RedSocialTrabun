import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar) {
  this.createLoginForm();
}

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      // name: ['', Validators.compose([Validators.required, Validators.name])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  // Snackbar de error
  onRegister() {
    this.authService.signup(this.loginForm.value.name, this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        console.log('Registro exitoso!');
      })
      .catch(() => {
        // Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error de registro, intenta otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onLogin() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .then(() => {
      console.log('Login exitoso!');
    })
    .catch(() => {
      // Algo salió mal, avisemos mejor para que reintente
      this.snackBar.open('Error al tratar de iniciar sesión, intenta otra vez'
        , null/*No necesitamos botón en el aviso*/
        , {
          duration: 3000
        });
    });
   }

   onLogout() {
    this.authService.logout()
      .then(() => {
       console.log('Logout exitoso, adios!');
      })
      .catch(() => {
        // Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error al tratar de cerrar sesión, intenta otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }
}
