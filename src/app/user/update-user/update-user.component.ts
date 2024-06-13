import { Component , OnInit} from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  form:any
  filename: string='';
  show: boolean=false;
  message: string='';
  userId: number=0;
  constructor(private fb:FormBuilder, private userService:UserService ,  private route:ActivatedRoute){
    // this.form=this.fb.group({
    //   name:this.fb.group({
    //     firstName: ['', Validators.required],
    //     lastName: ['' ,Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     role: ['' ,Validators.required],

    //   }),
    //   password:this.fb.group({
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required]
    //    }

    // )
    // })
  }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.getUser(this.userId)
   
    
    });
  }
  getUser(id:number){
    this.userService.getUserById(id).subscribe(data=>{
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
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get(' confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }


  submit(){
  let user :User= new User()
  user.firstName=this.form.value.name?.firstName
  user.lastName=this.form.value.name?.lastName
  user.email=this.form.value.name?.email
  user.password=this.form.value.password?.password
  user.username=  user.email
  user.role=  this.form.value.name?.role


    this.userService.editUser(this.userId,user).subscribe(data=>{
      this.show=true
      this.message =" votre  user  modifier avec success"
      console.log('data',data)
    })

  }

}
