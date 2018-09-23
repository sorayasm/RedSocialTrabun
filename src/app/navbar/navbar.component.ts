import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private authService: AuthService, public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout()
     .then(() => {
        //Logout exitoso, adios usuario!
        this.router.navigate(['/']);
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null //No necesitamos botón en el aviso
          , {
            duration: 3000
          });
      });
    }
  
}



