import { Component, OnInit } from '@angular/core';
import { YogaService } from '../../services/yoga.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})

export class YogaComponent implements OnInit {

  constructor(public yogaService: YogaService ) { }

  ngOnInit() {
  }

}
