import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedSocial Trabun';
// Posts
 posts: AngularFireList<any>;
 creator: Observable<any[]>;
 image: AngularFireList<any>;
 content: AngularFireList<any>;

 name: string;
 email: string;
 password: string;
  constructor(public db: AngularFireDatabase, public http: Http, public authService: AuthService, public route: ActivatedRoute) {
  }

}
