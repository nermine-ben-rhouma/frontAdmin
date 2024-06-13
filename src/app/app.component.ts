import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  user: any | null;
  clrVerticalNavCollapsed: boolean=true
  test=false
showMenu:boolean=false;
constructor(private router: Router) {
 
  this.router.events.subscribe((event: any) => {
    if (event.url) {
      if (event.url === '/auth/login' )  {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    }
  });
}
}
