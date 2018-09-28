import { Component } from '@angular/core';
import { AuthService } from './auth.service';
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
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));

    this.posts = db.list('/posts');
    this.creator = this.posts.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  addItem(newName: string) {
    this.posts.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.posts.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.posts.remove(key);
  }
  deleteEverything() {
    this.posts.remove();
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
