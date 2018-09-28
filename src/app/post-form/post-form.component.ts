import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { HomePageComponent } from '../home-page/home-page.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  postList$: AngularFireList<any>;

  constructor(private formBuilder: FormBuilder, private firebaseAuth: AngularFireAuth,
    private database: AngularFireDatabase) {
  this.createPostForm();
  this.postList$ = this.database.list('/posts');
  }

  createPostForm() {
    this.postForm = this.formBuilder.group({
      image: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  addPost() {
    const newpost = { // tipo inferido
      image: this.postForm.value.image,
      content: this.postForm.value.content,
      creator: this.firebaseAuth.auth.currentUser.email,
    };
  // const newKeyPost = this.postList$.push(newpost).key;
    this.postList$.push(newpost); // esto agrega un nuevo post
    this.postForm.reset();

    // deletePost(newKeyPost);
  }

  ngOnInit() {
  }

}
