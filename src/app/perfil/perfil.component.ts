import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
posts$: Observable<any>;

constructor(private database: AngularFireDatabase) {
  this.posts$ = this.database.list('/posts').valueChanges();
}

ngOnInit() {
}

}

