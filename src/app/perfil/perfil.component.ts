import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public posts$: Observable<any[]>;
  constructor(private firebaseAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.posts$ = this.database.list('/post').valueChanges();
    const user = this.firebaseAuth.auth.currentUser;
        console.log('usuario: ' + user.uid);
  }

  ngOnInit() {
  }

}
