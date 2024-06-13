import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../gestionRandonnee/randonnee';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservation'; // Ensure this URL matches your backend endpoint

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/list-reservation`);  // Ensure the endpoint matches
  }

  createReservation(reservation: any): Observable<any> {
    return this.http.post<Reservation>(`${this.apiUrl}/create-reservation`, reservation);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    console.log("hello")
    return this.http.patch<Reservation>(this.apiUrl+'/update-reservation/'+JSON.stringify(id), reservation);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
