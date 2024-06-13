import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../aactivity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {
  form: FormGroup;
  show: boolean = false;
  message: any;
  showError: boolean = false;

  constructor(private fb: FormBuilder,private activityService: ActivityService)  {
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.activityService.createActivity(this.form.value).subscribe(
        response => {
          this.form.reset();
          console.log(response);
          this.show = true;
          this.message="votre actvité a été créé avec succès";
        },
        error => {
          console.error(error);
          this.message = error.message; 
          this.showError = true; 
          this.message="votre actvité a été créé avec succès";
        }
      );
    } else {
      this.showError = true;
      this.message = 'Please fill in all required fields.';
    }
  }
}
