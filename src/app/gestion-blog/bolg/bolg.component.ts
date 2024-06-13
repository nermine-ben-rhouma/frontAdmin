import { Component } from '@angular/core';
import { BlogService } from '../bolg-service.service';

@Component({
  selector: 'app-bolg',
  templateUrl: './bolg.component.html',
  styleUrls: ['./bolg.component.css']
})
export class BolgComponent {
  blogs: any[] = [];
  idBolg: number=0;
  show: boolean=false;

  constructor(private blogService: BlogService) { } // Inject the blog service

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs().subscribe(
      (blogs: any[]) => {
        this.blogs = blogs;
        console.log( this.blogs)
      },
      (error) => {
        console.error('Error fetching blogs:', error);
        // Handle error
      }
    );
  }
  deleteAction(id: number): void {
    this.idBolg = id;
    this.show = true;
  }

  closeAction(): void {
    this.show = false;
  }

  saved(): void {
    this.show = false;
    this.getAllBlogs();
  }

}
