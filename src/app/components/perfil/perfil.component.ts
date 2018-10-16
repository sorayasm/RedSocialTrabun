import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
public posts$: Observable<any>;
public users$: Observable<any>;
public user: Observable<firebase.User>;

constructor(public database: AngularFireDatabase, public firebaseAuth: AngularFireAuth) {
  this.posts$ = this.database.list('/posts').valueChanges();
  this.users$ = this.database.list('/users').valueChanges();
  this.filter();
}

public filter() {
const user = this.firebaseAuth.auth.currentUser;
const myUser = user.uid;
  console.log('usuario: ' + myUser);

}

ngOnInit() {

}

}
