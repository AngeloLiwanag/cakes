import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  
  getCakes(){
    return this._http.get('/cake')
  }
  addCake(newCake){
    console.log('Inside service')
    return this._http.post('/cake/create', newCake)
  }
}
