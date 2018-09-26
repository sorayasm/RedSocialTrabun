import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private database: AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges();
  }

  ngOnInit() {
  }

}

 /*
 // public posts$: Observable<any[]>;
  public image$: AngularFireList<any[]>;
  public content$: AngularFireList<any[]>;
  public users$: AngularFireList<any[]>;
  public creator$: AngularFireList<any>;



  constructor(public firebaseAuth: AngularFireAuth, public db: AngularFireDatabase) {
    // this.posts$ = database.list('/posts').valueChanges();
   /* this.image$ = database.list('/posts').valueChanges();
    this.content$ = database.list('/posts').valueChanges();
    this.users$ = database.list('/users').valueChanges();
   const user = this.firebaseAuth.auth.currentUser;
        console.log('usuario: ' + user.uid);
   const image = this.db.list('/image');
      console.log('image:' + image);
   const content = this.db.list('/content');
   console.log('content:' + content);*/


  /*getPost() {
    const getPost = {
      image: this.database.list('/image').valueChanges(),
      content: this.database.list('/content').valueChanges(),
      creator: this.database.list('/creator').valueChanges()
    };
    this.showPost$.push(getPost);
  }*/
