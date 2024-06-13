import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GestionReservationeRoutingModule } from './gestion-reservatione-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    GestionReservationComponent,UpdateReservationComponent,AddReservationComponent, 
    DeleteReservationComponent,DetailReservationComponent

  ],
  imports: [
    CommonModule,
    GestionReservationeRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
  ]
})
export class GestionReservationeModule { }
