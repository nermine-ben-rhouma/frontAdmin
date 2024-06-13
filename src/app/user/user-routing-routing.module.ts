import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
// import { AddUserComponent } from '../add-user/add-user.component';
// import { UpdateUserComponent } from '../update-user/update-user.component';
// import { DeleteUserComponent } from '../delete-user/delete-user.component';
// import { UserComponent } from '../user.component';
const routes: Routes = [
{path:"",component:UserComponent},
{path:"add-user",component:AddUserComponent},
{path:"update-user/:id",component:UpdateUserComponent},
{path:"delete-user/:id",component:DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingRoutingModule { }
