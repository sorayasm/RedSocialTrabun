import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  posts$: any;
  postList$: AngularFireList<any[]>;


  constructor(public database: AngularFireDatabase) {
   this.getPosts();
  }

  getPosts() {
    this.database.list('/posts').snapshotChanges()
    .pipe(map(
      snapshot => {
        const result = [];
        for (let i = 0; i < snapshot.length; i++) {
          const postVal = snapshot[i].payload.val();
          postVal['$key'] = snapshot[i].payload.key; // add $key
          result.push(postVal);
        } return result;
      }))
    .subscribe((resp: any) => {
      this.posts$ = Object.values(resp); // make it readable
    });
  }

deletePost(dataId) {
 // const newKeyPost = this.postList$.(this.posts$).key;
  const post = this.database.list(`/posts/${dataId}`).remove();
}


  ngOnInit() {
  }

}

