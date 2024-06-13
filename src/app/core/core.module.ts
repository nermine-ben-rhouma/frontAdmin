import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';

import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule,FormsModule,RouterModule
  ],exports:[   
    CoreComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent]
})
export class CoreModule { }
