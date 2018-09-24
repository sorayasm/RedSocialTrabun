import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 // public posts$: Observable<any[]>;
  public image$: Observable<any[]>;
  public content$: Observable<any[]>;
  public users$: Observable<any[]>;



  constructor(private firebaseAuth: AngularFireAuth, private database: AngularFireDatabase) {
    // this.posts$ = database.list('/posts').valueChanges();
    this.image$ = database.list('/image').valueChanges();
    this.content$ = database.list('/content').valueChanges();
    this.users$ = database.list('/users').valueChanges();

   /*const user = this.firebaseAuth.auth.currentUser;
        console.log('usuario: ' + user.uid);*/
  }

  ngOnInit() {
  }

}
