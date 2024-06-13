import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';

const routes: Routes = [
  { path: '', component: GestionReservationComponent },
  { path: 'reservations-add', component: AddReservationComponent },
  { path: 'reservations/detail/:id', component: DetailReservationComponent },
  { path: 'reservations/update/:id', component: UpdateReservationComponent },
  { path: 'reservations/delete/:id', component: DeleteReservationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionReservationeRoutingModule { }
