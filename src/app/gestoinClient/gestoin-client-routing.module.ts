import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestoinClientComponent } from './gestoin-client/gestoin-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateCleintComponent } from './update-cleint/update-cleint.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
const routes: Routes = [
  {path:"",component:GestoinClientComponent},
  {path:"add-client",component:AddClientComponent},
  {path:"update-client/:id",component:UpdateCleintComponent},
  {path:"delete-client/:id",component:DeleteClientComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestoinClientRoutingModule { }
