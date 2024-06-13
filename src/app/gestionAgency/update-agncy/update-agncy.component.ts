import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../agency.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-agncy',
  templateUrl: './update-agncy.component.html',
  styleUrls: ['./update-agncy.component.css']
})
export class UpdateAgncyComponent {
  form: FormGroup;
  show: boolean = false;
  message: string = '';
  showError: boolean = false;
  idAgnce:number=0
  constructor(private fb: FormBuilder, private agencyService: AgencyService , private activatedRoute:ActivatedRoute) {
    this.form = this.fb.group({
      name: [, Validators.required],
      activity: [, Validators.required],
      description: [, Validators.required],
      address: [],
      postalCode: [],
      city: [],
      coordinates: [], // or separate form controls for latitude and longitude
      phoneNumber: [],
      userId: [Validators.email],
      email:[]
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idAgnce = +params['id'];
      this.getAgencyId(this.idAgnce)


    })

}
getAgencyId(id:number){
  this.agencyService.getAgencyById(this.idAgnce).subscribe(data=>{
    console.log(data)
  
    this.form.patchValue(data)
  

  })
}
onSubmit(): void {
  if (this.form.valid) {
    // Process the form data here
    console.log(this.form.value);
    // Example of using your client service
    this.agencyService.editAgencyById(this.idAgnce,this.form.value).subscribe(
      response => {
        // Handle success response
        console.log(response);
        this.show = true; // Hide the form after successful submission if needed
        this.message=" agence étè modifier avec sucess"
      },
      error => {
        // Handle error response
        console.error(error);
        this.message = error.message; // Set the error message
        this.showError = true; // Show the error message
      }
    );
  } else {
    // Form is invalid, show error messages
    this.showError = true;
    this.message = 'Please fill in all required fields.';
  }
}
}
