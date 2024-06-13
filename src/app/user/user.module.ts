import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
// import { UserRoutingRoutingModule } from './user-routing/user-routing-routing.module';
import { ClarityModule ,ClrStepperModule  } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingRoutingModule } from './user-routing-routing.module';
// import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UserDetailComponent,
  
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule,ClrStepperModule,
    FormsModule,ReactiveFormsModule,UserRoutingRoutingModule,HttpClientModule,
  ],exports:[  UserComponent, AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent]
})
export class UserModule { }
