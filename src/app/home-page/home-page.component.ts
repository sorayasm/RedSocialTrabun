import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public posts$:Observable<any[]>;

  constructor(private database:AngularFireDatabase) { }

  ngOnInit() {
    this.posts$ = this.getPost('/posts');
  }

  getPost(path){
    return this.database.getPost(path)
  }

}
