import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CircuitService } from '../circuit.service';

@Component({
  selector: 'app-detail-cricuit',
  templateUrl: './detail-cricuit.component.html',
  styleUrls: ['./detail-cricuit.component.css']
})
export class DetailCricuitComponent {
  agencyId: number=0;
  agency: any;
  error: string='';
  circuit: any;
constructor(private route: ActivatedRoute, private circuitService: CircuitService ) { }

ngOnInit(): void {

  this.route.params.subscribe(params => {
    this.agencyId = +params['id']; 
 
    this.getCircuitDetails(this.agencyId);
  });
}

getCircuitDetails(id: number): void {
  this.circuitService.findOne(id).subscribe(

    circuit => {
      console.log(circuit)
      this.circuit = circuit
    },
    error => {
      console.error('Failed to fetch agency details:', error);
      this.error = 'Failed to fetch agency details. Please try again later.';
    }
  );
}

}
