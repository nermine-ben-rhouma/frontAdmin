import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CircuitService } from '../circuit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cricuit',
  templateUrl: './update-cricuit.component.html',
  styleUrls: ['./update-cricuit.component.css']
})
export class UpdateCricuitComponent implements OnInit {
  form: FormGroup;
  show: boolean=false;
  message: any;
  showError: boolean=false;
  agencyId: number=0;
  constructor(private fb: FormBuilder, private circuitService: CircuitService ,private route:ActivatedRoute) {
    this.form = this.fb.group({
       
      ville: [, Validators.required],
      depart: [ Validators.required],
      arrival: [, Validators.required],
      duree: [, Validators.required],
  },

);
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.agencyId = +params['id']; 
   
      this.getCircuitDetails(this.agencyId);
    });
  }
  
  getCircuitDetails(id: number): void {
    this.circuitService.findOne(id).subscribe(data => {
      console.log(data)
      this.form.patchValue(data)
       
    
  })
  
}
onSubmit(): void {
  if (this.form.valid) {
    
    console.log(this.form.value);
   
    this.circuitService.update(this.agencyId,this.form.value).subscribe(
      response => {
       this.form.reset()
        console.log(response);
        this.show = true;
        this.message="votre  circuit étè modifie avec scuccess "
      },
      error => {
       
        console.error(error);
        this.message = error.message; 
        this.showError = true; 
        this.message="votre  circuit étè crée avec scuccess "
      }
    );
  } else {
  
    this.showError = true;
    this.message = 'Please fill in all required fields of .';
  }
}
}
