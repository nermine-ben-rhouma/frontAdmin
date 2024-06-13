import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRandonneeComponent } from '../gestionRandonnee/add-randonnee/add-randonnee.component';
import { UpdateRandonneeComponent } from '../gestionRandonnee/update-randonnee/update-randonnee.component';
import { DetailRandonneeComponent } from '../gestionRandonnee/detail-randonnee/detail-randonnee.component';
import { DetelelRandonneeComponent } from '../gestionRandonnee/detelel-randonnee/detelel-randonnee.component';
import { GestionRandonneeComponent } from './gestion-randonnee/gestion-randonnee.component';
const routes: Routes = [
  {path:'',component: GestionRandonneeComponent},
  {path:'add-randonnee',component:AddRandonneeComponent},
  {path:'update-randonnee/:id', component: UpdateRandonneeComponent },
  {path:'delete-randonnee', component: DetelelRandonneeComponent },
  {path:'detail-randonnee', component: DetailRandonneeComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRandonneeRoutingModule { }
