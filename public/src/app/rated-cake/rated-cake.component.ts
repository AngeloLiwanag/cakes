import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rated-cake',
  templateUrl: './rated-cake.component.html',
  styleUrls: ['./rated-cake.component.css']
})
export class RatedCakeComponent implements OnInit {
  @Input() specific_cake=[];
  constructor() { }

  ngOnInit() {
  }
}
