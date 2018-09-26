import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: any[] = [];

  constructor( public http: HttpClient) {
    this.postUser();
  }

  public postUser() {
    this.http.get('https://trabun-4b6cd.firebaseio.com/posts.json')
    .subscribe( (resp: any[]) => {
      this.posts = resp,
      console.log(resp);
    });
  }
}
