import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Login } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 urlAPI='http://localhost:3000'


  constructor(private http: HttpClient) { }
  
  login(user:any): Observable<any> {
      return this.http.post<any>(this.urlAPI+'/auth/login',user)
  }

  // getCookie(cname: string) {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  createUser(user:any): Observable<any>{
    return this.http.post<any>(this.urlAPI+'/user/create-user',user) as Observable<any>
  }
  getAllUsers(): Observable<any> {
  return this.http.get(this.urlAPI+'/user') as Observable<any>
  }
   getUserById(id:number){
    return this.http.get(this.urlAPI+'/user/'+JSON.stringify(id)) as Observable<any>
   }
  editUser(id:number,user:any): Observable<any>{
    return this.http.patch<any>(this.urlAPI+'/user/'+JSON.stringify(id),user) as Observable<any>
  }
  deleteUser(id:number): Observable<any>{
    return this.http.delete(this.urlAPI+'/user/'+JSON.stringify(id)) as Observable<any>
  }

}
