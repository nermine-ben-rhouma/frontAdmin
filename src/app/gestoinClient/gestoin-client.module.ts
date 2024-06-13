import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestoinClientRoutingModule } from './gestoin-client-routing.module';
import { GestoinClientComponent } from './gestoin-client/gestoin-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateCleintComponent } from './update-cleint/update-cleint.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    GestoinClientComponent,
    AddClientComponent,
    UpdateCleintComponent,
    DetailclientComponent,
    DeleteClientComponent,
  ],
  imports: [
    CommonModule,
    GestoinClientRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
  ]
})
export class GestoinClientModule { }
