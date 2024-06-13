import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-gestion-agency',
  templateUrl: './gestion-agency.component.html',
  styleUrls: ['./gestion-agency.component.css']
})
export class GestionAgencyComponent  implements OnInit{
  idAgency: any;
  show: boolean=false;
  agencies: any=[]
  agencyId: number=0;
  constructor( private agencyService: AgencyService) {}
  ngOnInit(): void {
    this.getAllAgency()
  }
  getAllAgency()
{
  this.agencyService.getAllAgencies().subscribe(data=>{
    console.log('data',data)
    this.agencies=data[0]
    this.agencies=this.agencies.filter((x:any)=>x.active==true)
  })
}  
  deleteAction(idAgency:number) {
    this.agencyId=idAgency
      this.show = true;
    }
    clickShow(){
      this.show=!this.show
    }
    closeAction(){
      this.show=false
    }
    saved() {
      this.show = false;
      this.getAllAgency()
    }
}
