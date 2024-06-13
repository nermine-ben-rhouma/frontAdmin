import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentaireComponent } from './commentaire/commentaire.component';

const routes: Routes = [
  { path: 'commentaires', component: CommentaireComponent },
  { path: '', redirectTo: '/commentaires', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentaireRoutingModule { }
