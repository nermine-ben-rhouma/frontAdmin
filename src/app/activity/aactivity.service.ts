import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private baseUrl = 'http://localhost:3000/activity'; // Update the base URL according to your backend server

  constructor(private http: HttpClient) { }

  createActivity(activityData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-activity`, activityData)
     
  }

  getAllActivities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/activity`)
       
  }

  getActivityById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activity/${id}`)
       
  }

  updateActivity(id: number, updateData: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/activity-update/${id}`, updateData)
       
  }

  deleteActivity(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/activity-delete/${id}`)
       
  }


}
