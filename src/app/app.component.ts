import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedSocial Trabun';
  posts: Observable<any[]>;
 name: string;
 email: string;
 password: string;
  constructor( db: AngularFireDatabase, private http: Http, public authService: AuthService, route: ActivatedRoute) {
    this.posts = db.list('posts').valueChanges();
    const relative = db.object('posts').valueChanges();
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.name = this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
