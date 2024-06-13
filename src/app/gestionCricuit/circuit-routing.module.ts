import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCiruitComponent } from './add-cricuit/add-cricuit.component';
import { DetailCricuitComponent } from './detail-cricuit/detail-cricuit.component';
import { DeteleCricuitComponent } from './detele-cricuit/detele-cricuit.component';
import { UpdateCricuitComponent } from './update-cricuit/update-cricuit.component';
import { CircuitComponent } from './circuit/circuit.component';

const routes: Routes = [

    { path: '', component: CircuitComponent },
    { path: 'circuits/add', component: AddCiruitComponent },
    { path: 'circuits/:id', component: DetailCricuitComponent },
    { path: 'circuits/:id/delete', component: DeteleCricuitComponent },
    { path: 'circuit-update/:id', component: UpdateCricuitComponent },
    { path: '', redirectTo: 'circuits', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircuitRoutingModule { }
