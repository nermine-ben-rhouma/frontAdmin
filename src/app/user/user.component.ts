import { Component ,OnInit} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from './user.service';

// import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  userp=2
  id=3
  showAlert: boolean=false;
  data: any;
  name="Hello"
  form:FormGroup
  constructor(private serviceUser:UserService,private formBuilder:FormBuilder ){
    this.form=this.formBuilder.group({
     name:["",Validators.required],
     email:["email",Validators.required]
    })
   

  }
  submit(){
    console.log("forms",this.form.value)
  }
  ngOnInit(): void {
    console.log("haller",this.name)
    this.serviceUser.getAllUsers().subscribe(data=>{
      this.data=data[0]
      console.log('data',this.data)
    })
    this.onchange()
  }
  onchange(){
    console.log('the name',this.name)
  }
 
  deleteAction(id:number){
    this.showAlert= true; 
   this.userp=id

  }
  closeAction(){
    this.showAlert=false
  }
  saveAction(){
    this.showAlert=false
    this.serviceUser.getAllUsers().subscribe(data=>{
      this.data=data[0]
      console.log('data',this.data)
    })
  }
}
