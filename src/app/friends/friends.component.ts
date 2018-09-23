import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  public users$: Observable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users$ = database.list('/users').valueChanges();
  }
  ngOnInit() {
  }

}
