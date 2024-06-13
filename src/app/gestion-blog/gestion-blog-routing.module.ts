import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolgComponent } from './bolg/bolg.component';
import { BolgAddComponent } from './bolg-add/bolg-add.component';
import { BolgUpdateComponent } from './bolg-update/bolg-update.component';
const routes: Routes = [
  { path: '', component: BolgComponent },
  { path: 'blog-add', component: BolgAddComponent },
  { path: 'blog-update/:id', component: BolgUpdateComponent },
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionBlogRoutingModule { }
