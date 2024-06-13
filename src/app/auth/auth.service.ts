import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private http:HttpClient) { }
  login(user:Login):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:3000/user/login",user) as Observable<any>
 }
 loginAgency(user:Login):Observable<any>{
  return this.http.post<any>("http://127.0.0.1:3000/agency/login",user) as Observable<any>
}
}
