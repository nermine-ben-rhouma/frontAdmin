import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  
  form:FormGroup
  filename: string='';
  show: boolean=false;
  message: string='';
  constructor(private fb:FormBuilder, private clientService:ClientService){
    this.form=this.fb.group({
      name:this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['' ,Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['' ,Validators.required],


      }),
      password:this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
       }
      // , {
      //   validator: this.passwordMatchValidator
    
      // }
    )
    })
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get(' confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  ngOnInit(): void {
    
  }
  submit(){
  let  client :User = new User()
  client.firstName=this.form.value.name?.firstName
  client.lastName=this.form.value.name?.lastName
  client.email=this.form.value.name?.email
  client.password=this.form.value.password?.password
  client.username=  client.email
  client.role=  this.form.value.name?.role


    this.clientService.createClient(client).subscribe((data:any)=>{
      this.show=true
      this.message =" votre  Client étè crée avec success"
      console.log('data',data)
    })

  }

}
