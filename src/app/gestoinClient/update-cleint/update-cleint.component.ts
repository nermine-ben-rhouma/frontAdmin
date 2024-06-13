import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-update-cleint',
  templateUrl: './update-cleint.component.html',
  styleUrls: ['./update-cleint.component.css']
})
export class UpdateCleintComponent {
  form:FormGroup
  filename: string='';
  show: boolean=false;
  message: string='';
  clientId: number=0;
  constructor(private fb:FormBuilder, private clientService:ClientService , private route:ActivatedRoute){
    this.form=this.fb.group({
      name:this.fb.group({
        firstName: ['', ],
        lastName: ['' ,],
        email: ['',  Validators.email],
        role: ['' ,],


      }),
      password:this.fb.group({
        password: ['',],
        confirmPassword: ['',]
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
    this.route.params.subscribe(params => {
      this.clientId = +params['id']; 
      this.getUser(this.clientId)
   
    
    });
  }
  getUser(id:number){
    this.clientService.getClientById(id).subscribe((data:any)=>{
      this.form=this.fb.group({
        name:this.fb.group({
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName,Validators.required],
          email: [data.email, [Validators.required, Validators.email]],
          role: [data.role ,Validators.required],
  
        }),
        password:this.fb.group({
          password: [data.password, Validators.required],
          confirmPassword: ['', Validators.required]
         }
  
      )
      })
      })
  }

  
  submit(){
  let  client :Client=new Client()
  client.firstName=this.form.value.name?.firstName
  client.lastName=this.form.value.name?.lastName
  client.email=this.form.value.name?.email
  client.password=this.form.value.password?.password
  client.username=  client.email
  client.role=  this.form.value.name?.role


    this.clientService.updateClient(this.clientId,client).subscribe((data:any)=>{
      this.show=true
      this.message =" votre  Client étè modifiée avec success"
      console.log('data',data)
    })

  }
}
