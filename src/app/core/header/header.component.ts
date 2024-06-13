import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, boltIcon, homeIcon, userIcon ,sadFaceIcon,bugIcon,shieldIcon,certificateIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
ClarityIcons.addIcons(userIcon,homeIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, ) {}
  logout() {
    this.router.navigate(['/auth/login']);
    const allCookies = document.cookie.split(';');
   
    
  }
}
