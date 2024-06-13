import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../aactivity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {
  activityId: number=0;
  form: FormGroup;
  show: boolean=false;
  message: string='';
  showError: boolean=false;
  
  constructor(private fb: FormBuilder,private activityService: ActivityService,private route:ActivatedRoute)  {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      duration: [null],
      location: [''],
      difficult: ['', Validators.required],
      date: [new Date(), Validators.required],
      Return_departure_point: [true, Validators.required],
      randonneeId: [null] // Assuming you have a property named randonneeId in your form
    });
  }
 ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.activityId = +params['id']; 
      this.getActivity(this.activityId)
   
    
    });
  }
  getActivity(activityId:number){
    this.activityService.getActivityById(activityId).subscribe(data=>{
      console.log("data.title",data.title)
  this.form.patchValue(data)
    })


  }
  
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.activityService.updateActivity(this.activityId,this.form.value).subscribe(
        response => {
       
  
          this.show = true;
          this.message="votre activiteé a été modifier avec succès";
          this.form.reset();
        },
        error => {
          console.error(error);
          this.message = error.message; 
          this.showError = true; 
      
        }
      );
    } else {
      this.showError = true;
      this.message = 'Please fill in all required fields.';
    }
  }
  
}
