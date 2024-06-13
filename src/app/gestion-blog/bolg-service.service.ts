import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) {}

  createBlog(createBlogDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, createBlogDto);
  }

  getAllBlogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list-blog`);
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/blog/${id}`);
  }

  updateBlog(id: number, updateBlogDto: any): Observable<any> {
    console.log("updateBlogDto",updateBlogDto)
    return this.http.patch(`${this.baseUrl}/update-blog/${id}`, updateBlogDto);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-bolg/${id}`);
  }
}
