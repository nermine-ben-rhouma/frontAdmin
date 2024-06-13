import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRandonneeRoutingModule } from './gestion-randonnee-routing.module';
import { GestionRandonneeComponent } from './gestion-randonnee/gestion-randonnee.component';
 
import { AddRandonneeComponent } from '../gestionRandonnee/add-randonnee/add-randonnee.component';
import { UpdateRandonneeComponent } from '../gestionRandonnee/update-randonnee/update-randonnee.component';
import { DetailRandonneeComponent } from '../gestionRandonnee/detail-randonnee/detail-randonnee.component';
import { DetelelRandonneeComponent } from '../gestionRandonnee/detelel-randonnee/detelel-randonnee.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionRandonneeComponent,AddRandonneeComponent , UpdateRandonneeComponent ,DetailRandonneeComponent ,DetelelRandonneeComponent]
  ,
  imports: [
    CommonModule,
    GestionRandonneeRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class GestionRandonneeModule { }
