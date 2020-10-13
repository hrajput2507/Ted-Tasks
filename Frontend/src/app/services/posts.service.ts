import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http : HttpClient,
    private auth: AuthService, 

    ) { }


  
  newpost(post) {
    return this.http.post<any>('http://localhost:1220/posts',post);

  }
  getdata(data) {
    return this.http.get<any>('http://localhost:1220/posts', data);
  }


}
