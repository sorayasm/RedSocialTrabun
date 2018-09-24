import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private user: Observable<firebase.User>;
  public postsList$:Observable<any[]>;
  private userList$: AngularFireList<any>;

  constructor(private firebaseAuth: AngularFireAuth, private database:AngularFireDatabase) { 
    this.postsList$ = this.database.list('/post').valueChanges();
    this.user = firebaseAuth.authState;
    this.userList$ = this.database.list('/users');
  }
  ngOnInit() {
  }

}

