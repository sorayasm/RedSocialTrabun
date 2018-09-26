import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   authForm: FormGroup;

   constructor(private formBuilder: FormBuilder, public authService: AuthService, public snackBar: MatSnackBar, public router: Router, public firebaseAuth: AngularFireAuth) {
    const user = this.firebaseAuth.auth.currentUser;
    console.log(user);
    this.createAuthForm();
   }

   ngOnInit() {
   }

   createAuthForm() {
     this.authForm = this.formBuilder.group({
       email: ['', Validators.compose([Validators.required, Validators.email])],
       password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
     });
   }

  onRegister() {
  this.authService.signup(this.authForm.value.email, this.authForm.value.password)
  .then(() => {
    // Registro exitoso. Ingresemos los datos a la base de Datos y redireccionamos al login
    this.router.navigate(['/wall']);
  })
  .catch(() => {
    // Algo salió mal, avisemos mejor para que reintente
    this.snackBar.open('Error de registro, trata otra vez'
      , null/*No necesitamos botón en el aviso*/
      , {
        duration: 3000
      });
  });
  }

  onLogout() {
   return this.authService.logout()
  }
}