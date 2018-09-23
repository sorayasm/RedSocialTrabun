import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  postList$: AngularFireList<any>;

  constructor(private formBuilder: FormBuilder, private firebaseAuth: AngularFireAuth,
    private database: AngularFireDatabase, private authService: AuthService) {
  this.createPostForm();
  this.postList$ = this.database.list('/posts');
  }

  createPostForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  addPost() {
    const newpost = { // tipo inferido
      title: this.postForm.value.title,
      image: this.postForm.value.image,
      content: this.postForm.value.content,
      creator: this.firebaseAuth.auth.currentUser.uid
    };

    this.postList$.push(newpost); // esto agrega un nuevo post
    this.postForm.reset();
  }
  ngOnInit() {
  }

}
