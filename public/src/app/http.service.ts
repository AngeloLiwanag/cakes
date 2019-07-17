import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// "can not get / and new line or save new line"

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
  addRate(id, newRate){
    console.log('Inside add rate service')
    //  return this._http.post(`/cakes/addRate/${id}`, newRate)
    return this._http.post('/cakes/addRate/' + id, newRate);
  }
}
