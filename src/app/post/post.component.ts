import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title:string;
  @Input() image:string;
  @Input() content:string;
  
  constructor() { }

  ngOnInit() {
  }

}
