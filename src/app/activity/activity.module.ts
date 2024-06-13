import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { DeletActivityComponent } from './delet-activity/delet-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActivityComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    DeletActivityComponent,
    DetailActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class ActivityModule { }
