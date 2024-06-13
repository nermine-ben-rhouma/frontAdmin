import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAgencyRoutingModule } from './gestion-agency-routing.module';

import { ClarityModule ,ClrStepperModule  } from '@clr/angular';

import { DeleteAgncyComponent } from './delete-agncy/delete-agncy.component';
import { UpdateAgncyComponent } from './update-agncy/update-agncy.component';
import { DetailAgncyComponent } from './detail-agncy/detail-agncy.component';
import { AddAgncyComponent } from './add-agncy/add-agncy.component';
import { GestionAgencyComponent } from './gestion-agency/gestion-agency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [    
    GestionAgencyComponent,
    AddAgncyComponent,
    DeleteAgncyComponent,
    UpdateAgncyComponent,
    DetailAgncyComponent,],
  imports: [
    CommonModule,
    GestionAgencyRoutingModule,ClarityModule ,ClrStepperModule ,FormsModule,ReactiveFormsModule
  ],exports:[    GestionAgencyComponent,
    AddAgncyComponent,
    DeleteAgncyComponent,
    UpdateAgncyComponent,
    DetailAgncyComponent,]
})
export class GestionAgencyModule { }
