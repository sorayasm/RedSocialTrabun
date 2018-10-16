import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DatabaseService } from '../../services/database.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
public author: any;
  constructor(public database: AngularFireDatabase, public dbService: DatabaseService, private firebaseAuth: AngularFireAuth) {
   this.author = this.firebaseAuth.auth.currentUser.email;
  }

  ngOnInit() {
  }

  addLike(key, likes) {
    likes++;
    this.dbService.updateData('posts/' + key, { likes: likes });
  }
}

