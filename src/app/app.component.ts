import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedSocial Trabun';
    
      name:string;
      email:string;
      password:string;
    

  constructor(private http: Http, public authService: AuthService, route: ActivatedRoute) {

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
