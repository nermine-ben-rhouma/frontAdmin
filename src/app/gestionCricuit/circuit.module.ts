import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CircuitRoutingModule } from './circuit-routing.module';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCiruitComponent } from './add-cricuit/add-cricuit.component';
import { DetailCricuitComponent } from './detail-cricuit/detail-cricuit.component';
import { DeteleCricuitComponent } from './detele-cricuit/detele-cricuit.component';
import { UpdateCricuitComponent } from './update-cricuit/update-cricuit.component';
import { CircuitComponent } from './circuit/circuit.component';
import { CircuitRoutingModule } from './circuit-routing.module';



@NgModule({
  declarations: [
    AddCiruitComponent,
    DetailCricuitComponent,
    DeteleCricuitComponent,
    UpdateCricuitComponent,
    CircuitComponent
  
  ],
  imports: [
    CommonModule,
    CircuitRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  
  
  ]
})
export class CircuitModule { }
