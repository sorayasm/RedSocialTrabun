import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users$:Observable<any>; 
  constructor(private database:AngularFireDatabase) { 

    this.users$ = this.database.list('/users').valueChanges();
  }

  ngOnInit() {
  }

}
