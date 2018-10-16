import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

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
      content: ['', Validators.required],
    });
  }

  addPost() {
    const newpost = {
      content: this.postForm.value.content,
      creator: this.firebaseAuth.auth.currentUser.email,
    };
     this.postList$.push(newpost);
    this.postForm.reset();
  }

  ngOnInit() {
  }

}
