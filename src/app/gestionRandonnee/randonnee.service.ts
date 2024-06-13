import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from './randonnee';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private apiUrl = 'http://localhost:3000/random'; // Update the API URL as per your backend server

  constructor(private http: HttpClient) { }
//// connexion avec front end and backend url http client 
  createRandom(randomData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-randoone`, randomData);
  }

  getAllRandoms(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list-randoon`);
  }

  getRandomById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateRandom(id: number, randomData: any): Observable<any> {
    return this.http.patch<any>(this.apiUrl+'/update-randonnee/'+JSON.stringify(id), randomData);
  }

  deleteRandom(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'/delete-randonnee/'+JSON.stringify(id));
  }
  addPicture(picture: Picture) {
    return this.http.post<any>('http://localhost:3000/pictures/add-picture',picture);
  }
  createRandomDetail(randonneeDetail: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-randoone-detail`, randonneeDetail);
  }
  }
