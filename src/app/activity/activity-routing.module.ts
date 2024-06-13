import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { DeletActivityComponent } from './delet-activity/delet-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
const routes: Routes = [
  
     { path: '', component: ActivityComponent },

      { path: 'add', component: AddActivityComponent },
      { path: 'update/:id', component: UpdateActivityComponent },
      { path: 'detail/:id', component: DetailActivityComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
