import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAgncyComponent } from './delete-agncy/delete-agncy.component';
import { UpdateAgncyComponent } from './update-agncy/update-agncy.component';
import { DetailAgncyComponent } from './detail-agncy/detail-agncy.component';
import { AddAgncyComponent } from './add-agncy/add-agncy.component';
import { GestionAgencyComponent } from './gestion-agency/gestion-agency.component';
const routes: Routes = [
  {path:'',component:GestionAgencyComponent },
  {path:'add-agency',component:AddAgncyComponent },
  {path:'detail-agency/:id',component:DetailAgncyComponent },
  {path:'update-agency/:id',component:UpdateAgncyComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAgencyRoutingModule { }
