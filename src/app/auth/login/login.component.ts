import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup
  show: boolean=false;
  message: string='';
  user:Login =new Login()
  constructor(private  fb:FormBuilder ,private authService:  AuthService, private router: Router,){

    this.form=fb.group({
      typeOption:['role',Validators.required],
      email:['email',[Validators.email,Validators.required]],    //formControlName="email" (input)="onInputChange($event)"
      password:['password',Validators.required]
    })}
    login() {
      this.user.email=this.form.value?.email
      this.user.password=this.form.value?.password
      this.user.role=this.form.value?.typeOption
      console.log( this.user.role)
      if (this.user.role=="agence"){
        this.authService.loginAgency(this.user).subscribe(
          token => {
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 24000 * 3600;
            now.setTime(expireTime);
            localStorage.setItem('token',token)
            localStorage.setItem('expires',"expires=" + now + ";path=/")
            document.cookie = "userId=" + Object.values(token)[0] + "; expires=" + now + ";path=/";
            document.cookie = "token=" + Object.values(token)[11] + "; expires=" + now + ";path=/";
            document.cookie = "role=" + Object.values(token)[12] + "; expires=" + now + ";path=/";
           
              this.router.navigateByUrl('/randonnee');
            
          },
          err => {
            this.show = true
            this.message=' user ne est exist pas'
          }
        )
      }else{
        this.authService.login(this.user).subscribe(
          token => {
            console.log(token)
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 24000 * 3600;
            now.setTime(expireTime);
            localStorage.setItem('token',token)
            localStorage.setItem('expires',"expires=" + now + ";path=/")
            document.cookie = "userId=" + Object.values(token)[0] + "; expires=" + now + ";path=/";
            document.cookie = "token=" + Object.values(token)[10] + "; expires=" + now + ";path=/";
            document.cookie = "role=" + Object.values(token)[6] + "; expires=" + now + ";path=/";
            if (token.role == "admin") {
              this.router.navigateByUrl('/user');
            }
          },
          err => {
            this.show = true
            this.message=' user ne est exist pas'
          }
        )
      }
  
   
   }

}
