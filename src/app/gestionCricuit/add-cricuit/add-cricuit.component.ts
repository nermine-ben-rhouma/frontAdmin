import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CircuitService } from '../circuit.service';

@Component({
  selector: 'app-add-cricuit',
  templateUrl: './add-cricuit.component.html',
  styleUrls: ['./add-cricuit.component.css']
})


export class AddCiruitComponent {
  form: FormGroup;
  show: boolean=false;
  message: any;
  showError: boolean=false;
  constructor(private fb: FormBuilder, private circuitService: CircuitService) {
    this.form = this.fb.group({
      id: ['1'],
      ville: ['ville', Validators.required],
      depart: ['depart', Validators.required],
      arrival: ['presentation', Validators.required],
      duree: ['duree', Validators.required],
      // createdAt: [''],
      // randonneeId: [''],
      // updatedAt: [''],
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      
      console.log(this.form.value);
     
      this.circuitService.create(this.form.value).subscribe(
        response => {
         this.form.reset()
          console.log(response);
          this.show = true;
          this.message="votre  circuit étè crée avec scuccess "
        },
        error => {
         
          console.error(error);
          this.message = error.message; 
          this.showError = true; 
       
        }
      );
    } else {
    
      this.showError = true;
      this.message = 'Please fill in all required fields of .';
    }
  }
}



