import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rated-cake',
  templateUrl: './rated-cake.component.html',
  styleUrls: ['./rated-cake.component.css']
})
export class RatedCakeComponent implements OnInit {
  @Input() specific_cake=[];
  constructor() { }
  avg = 0;

  ngOnInit() {
    this.averageRate(this.specific_cake);
  }
  averageRate(specific_cake){
    var sum = 0;
    for(let rate of specific_cake.comments) {
      console.log(rate.rate);
      sum = sum + rate.rate;
    }
    this.avg = sum / specific_cake.comments.length;
  }

}
