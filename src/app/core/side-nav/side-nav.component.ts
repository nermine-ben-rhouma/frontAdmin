import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  collapsed:boolean=true
  role: any;
  userId: number=0;
  constructor(private router: Router, ) {}

  ngOnInit(): void {
    
      this.role = this.getCookie('role')
      this.userId=Number(this.getCookie('userId'))

  
}
logout() {
  this.router.navigate(['/auth/login']);
  const allCookies = document.cookie.split(';');
 
  
}
getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


}
