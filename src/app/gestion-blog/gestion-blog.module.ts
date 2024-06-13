import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionBlogRoutingModule } from './gestion-blog-routing.module';
import { BolgComponent } from './bolg/bolg.component';
import { BolgAddComponent } from './bolg-add/bolg-add.component';
import { BolgUpdateComponent } from './bolg-update/bolg-update.component';

import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BolgDeteleComponent } from './bolg-detele/bolg-detele.component';


@NgModule({
  declarations: [
    BolgComponent,
    BolgAddComponent,
    BolgUpdateComponent,
    BolgDeteleComponent
  ],
  imports: [
    CommonModule,
    GestionBlogRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class GestionBlogModule { }
