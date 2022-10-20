import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facebook } from './login/facebook';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {  }
  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  getuserdata(username: string,password: string){
    return this.http.get('http://localhost:4000/facebook/loginvalid/'+username+'/'+password);
  }
  postuserdata(user:Facebook):Observable<Facebook>{
    return this.http.post<Facebook>('http://localhost:4000/facebook/register/',user,this.httpOptionsPost);
  }
  getuserpassword(username:string):Observable<Facebook>{
    return this.http.get<Facebook>('http://localhost:4000/facebook/getusername/'+username);
  }
}
