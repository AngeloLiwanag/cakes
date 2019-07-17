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
  newCake: any;
  
  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {avg_rate: "", baker_name: "", img_url: ""};
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
}

