import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:3000/commentaire';

  constructor(private http: HttpClient) {}

  getCommentaires(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/list-commentaire');
  }

  getCommentaire(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.apiUrl}/${id}`);
  }

  createCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiUrl, commentaire);
  }

  deleteCommentaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
