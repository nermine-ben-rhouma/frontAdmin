import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ClarityModule, ClrIconModule } from '@clr/angular'; // add clarity design
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
// import { GestoinClientModule } from './gestoinClient/gestoin-client.module';
// import { GestionAgencyModule } from './gestionAgency/gestion-agency.module';
// import { GestionRandonneeModule } from './gestionRandonnee/gestion-randonnee.module';
// import { GestionReservationeModule } from './gestionReservatione/gestion-reservatione.module';
import { UserModule } from './user/user.module';
import { CircuitModule } from './gestionCricuit/circuit.module';
import { CoreModule } from './core/core.module';
import { ActivityModule } from './activity/activity.module';
import { GestionRandonneeModule } from './gestionRandonnee/gestion-randonnee.module';
import { GestionMaterielModule } from './gestion-materiel/gestion-materiel.module';
import { GestionReservationeModule } from './reservation/gestion-reservatione.module';
import '@cds/core/icon/register.js';
import { ClarityIcons, employeeIcon, eyeIcon, eyeIconName, mapMarkerIcon, pencilIcon, trashIcon, userIcon,usersIcon,thinClientIcon,bicycleIcon,caravanIcon ,compassIcon,homeIcon,assignUserIcon, banIcon, logoutIcon} from '@cds/core/icon';
import { GestoinClientModule } from './gestoinClient/gestoin-client.module';
import { hotelIcon } from '@cds/core/icon/shapes/hotel';
import { tentIcon } from '@cds/core/icon/shapes/tent';
import { CommentaireModule } from './commentaire/commentaire.module';

ClarityIcons.addIcons(userIcon,employeeIcon,pencilIcon,trashIcon,logoutIcon,eyeIcon,mapMarkerIcon,usersIcon,thinClientIcon,bicycleIcon,caravanIcon ,compassIcon,homeIcon,assignUserIcon,hotelIcon,tentIcon,banIcon);

// import { GestionReservationeModule } from './gestionReservatione/gestion-reservatione.module';
// import { GestionCricuitModule } from './gestion-cricuit/gestion-cricuit.module';
// import { GestionAgencyModule } from './gestionAgency/gestion-agency.module';

@NgModule({
  declarations: [
    AppComponent,


 
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ClarityModule,ClrIconModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
    CoreModule,GestoinClientModule,
    UserModule,AuthModule, CircuitModule,
    ActivityModule,GestionRandonneeModule,
    UserModule,GestionMaterielModule,GestionReservationeModule,CommentaireModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
