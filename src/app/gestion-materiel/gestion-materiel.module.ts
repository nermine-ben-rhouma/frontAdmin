import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMaterielRoutingModule } from './gestion-materiel-routing.module';
import { MaterielAddComponent } from './materiel-add/materiel-add.component';
import { MaterielUpdateComponent } from './materiel-update/materiel-update.component';
import { MaterielDeleteComponent } from './materiel-delete/materiel-delete.component';
import { MaterielDetailComponent } from './materiel-detail/materiel-detail.component';
import { MaterielComponent } from './materiel/materiel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    MaterielAddComponent,
    MaterielUpdateComponent,
    MaterielDeleteComponent,
    MaterielDetailComponent,
    MaterielComponent
  ],
  imports: [
    CommonModule,
    GestionMaterielRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
  ]
})
export class GestionMaterielModule { }
