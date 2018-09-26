import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public postService: PostsService) {  }
  ngOnInit() {
  }

}

