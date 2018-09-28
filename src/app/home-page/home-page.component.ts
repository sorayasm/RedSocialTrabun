import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Key } from 'protractor';
import * as firebase from 'firebase/app';
import { FirebaseDatabase } from '@angular/fire';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts$: Observable<any>;
  postList$: AngularFireList<any[]>;


  constructor(public database: AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges();
   // this.postList$ = this.database.list('/posts').update;
  }

deletePost() {
 // const newKeyPost = this.postList$.(this.posts$).key;
  const post = this.database.list('/posts');
  post.remove('posts');
}

editPost() {
const posts = this.database.list('/posts');
posts.update('key-of-some-data', { });
}

  ngOnInit() {
  }

}

