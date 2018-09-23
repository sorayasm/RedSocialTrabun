import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public posts$:Observable<any[]>;

  constructor(private firebaseAuth: AngularFireAuth, private database:AngularFireDatabase) { 
    this.posts$ = this.database.list('/post').valueChanges();
    let user = this.firebaseAuth.auth.currentUser;
        console.log("usuario: " + user.uid)
      
  }

  ngOnInit() {
    
  }


}
