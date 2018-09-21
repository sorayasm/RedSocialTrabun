import { Injectable } from '@angular/core';

//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<firebase.User>;
  userList$ :AngularFireList<any>;
  constructor(private firebaseAuth: AngularFireAuth, private database:AngularFireDatabase,) { 
    this.user = firebaseAuth.authState;
    this.userList$ = this.database.list('/users');
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Success!', user);
        const newUser = { //tipo inferido
          email: email,
          uid: user.user.uid,
        };
        this.userList$.push(newUser);//esto agrega un nuevo User
      })
      .catch(err => {
        console.log('Something went wrong:',err.message); // dar mensaje de error al usuario
      });    
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }
}

