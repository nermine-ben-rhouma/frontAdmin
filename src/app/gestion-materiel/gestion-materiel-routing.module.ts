import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterielAddComponent } from './materiel-add/materiel-add.component';
import { MaterielUpdateComponent } from './materiel-update/materiel-update.component';
import { MaterielDeleteComponent } from './materiel-delete/materiel-delete.component';
import { MaterielDetailComponent } from './materiel-detail/materiel-detail.component';
import { MaterielComponent } from './materiel/materiel.component';
const routes: Routes = [
  { path: '', component: MaterielComponent },
  { path: 'materiel-add', component: MaterielAddComponent },
  { path: 'materiel-update/:id', component: MaterielUpdateComponent },
  { path: 'materiel-delete/:id', component: MaterielDeleteComponent },
  { path: 'materiel-detail/:id', component: MaterielDetailComponent },
  { path: '', redirectTo: '/materiel', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/materiel' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMaterielRoutingModule { }
