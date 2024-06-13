import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-detail-agncy',
  templateUrl: './detail-agncy.component.html',
  styleUrls: ['./detail-agncy.component.css']
})
export class DetailAgncyComponent {
  agencyId: number=0;
  agency : any; // Define the client object
  error: string='';

  constructor(private route: ActivatedRoute, private agencyService: AgencyService ) { }

  ngOnInit(): void {
    // Get the client ID from the route parameters
    this.route.params.subscribe(params => {
      this.agencyId = +params['id']; // Convert the ID to a number
      // Fetch the client details using the client ID
      this.getAgencyDetails(this.agencyId);
    });
  }
  
  getAgencyDetails(id: number): void {
 
    this.agencyService.getAgencyById(id).subscribe(
      (      agency: any) => {
        this.agency= agency;
        console.log('agency',agency)

     
      },
      (      error: any) => {
        console.error('Failed to fetch client details:', error);
        this.error = 'Failed to fetch client details. Please try again later.';
    
      }
    );
  }
}
