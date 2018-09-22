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

  constructor(private database:AngularFireDatabase) { 
    this.posts$ = this.database.list('/post').valueChanges();
  }

  ngOnInit() {
    
  }


}
