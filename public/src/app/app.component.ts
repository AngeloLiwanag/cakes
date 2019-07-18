import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Rate My Cakes';
  cakes = [];
  // specific_cake=[];
  newRate: any;
  newCake: any;
  clicked: boolean;
  
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {avg_rate: "", baker_name: "", img_url: ""};
    this.newRate = {rate: "", comment: ""}
    this.clicked = false;
  }

  getCakesFromService(){
    this._httpService.getCakes().subscribe(data => {
      console.log(data);
      this.cakes = data.cakes;
    })
  }

  onSubmitCake(){
    this._httpService.addCake(this.newCake).subscribe(data =>{
      console.log('Inside component');
      this.newCake = {avg_rate: "", baker_name: "", img_url: ""};
      this.ngOnInit();
    })
  }

  onSubmitRate(id:string, newRate){
    console.log('Inside submit rate component')
    this._httpService.addRate(id,newRate).subscribe(data =>{
      // this.newRate = {rate: data.rate, comment: data.comment};
      this.newRate = {rate: "", comment: ""};
      console.log(newRate);
      // this.ngOnInit();
    })
  }

  onButton(cake: string): void{
    console.log('clicked')
    this.specific_cake = cake;
    this.clicked = true;
    console.log(this.specific_cake)
  }
}

