import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  private apiUrl = 'http://localhost:3000/circuit';

  constructor(private http: HttpClient) {}

  create(createCircuitDto: any) {
    return this.http.post(`${this.apiUrl}/create-circuit`, createCircuitDto);
  }

  findAll() {
    return this.http.get(`${this.apiUrl}/list-circuit`);
  }

  findOne(id: number):Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`) as Observable<any>
  }

  update(id: number, updateCircuitDto: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, updateCircuitDto);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
