import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  registeruser(data){
    return this.http.post<any>('http://localhost:1220/forms',data)
  }


  loginuser(data){
    return this.http.post<any>('http://localhost:1220/login',data)
    
       //this.token = res ;

  }
  

}
