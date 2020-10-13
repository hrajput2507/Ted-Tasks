import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http : HttpClient) { }
 
getdata() {
  this.http.get('http://localhost:1220/forms').subscribe(res => {
    console.log(res);
  })
}

}
