import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  userList$: AngularFireList<any>;
  constructor(public firebaseAuth: AngularFireAuth, public database: AngularFireDatabase, public router: Router ) {
    this.userList$ = this.database.list('/users');
    this.user$.subscribe(
    (user) => {
      if (user) {
        this.userDetails$ = user;
      } else {
        this.userDetails$ = null;
      }
    }
  );
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Success!', user);
        const newUser = { // tipo inferido
          email: email,
          uid: user.user.uid,
          username: email,
          photoUrl: 'https://www.pekoda.com/images/default.png',
        };
        this.userList$.push(newUser); // esto agrega un nuevo User
      })
      .catch(err => {
        console.log('Something went wrong:', err.message); // dar mensaje de error al usuario
      });
  }

  login(email: string, password: string) {
     return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.userDetails$ == null ) {
        return false;
      } else {
        return true;
      }
    }

  logout() {
  return this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }

}
