import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/client'; // Directly setting the API URL

  constructor(private http: HttpClient) {}

  createClient(createClientDto:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-client`, createClientDto);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  getClientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  findAll(){
    return this.http.get(`${this.apiUrl}/list-client`);
  }

  updateClient(id: number, updateClientDto: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, updateClientDto);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
