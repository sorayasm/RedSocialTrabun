import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  posts$: any;

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
      this.posts$ = Object.values(resp).reverse(); // make it readable
    });
  }

  deletePost(dataId) {
    const post = this.database.list(`/posts/${dataId}`).remove();
  }

  updateData(path, object){
    this.database.object(path).update(object);
  }

}
