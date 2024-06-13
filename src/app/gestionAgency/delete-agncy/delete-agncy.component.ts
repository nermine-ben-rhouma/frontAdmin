import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-delete-agncy',
  templateUrl: './delete-agncy.component.html',
  styleUrls: ['./delete-agncy.component.css']
})
export class DeleteAgncyComponent {
  @Input() agencyId:any
  @Output() closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
    constructor(private   agencyService: AgencyService){}
  
    
    closeAction(){
      this.closed.emit(true)
     }
     save(){
      this.agencyService.deleteAgencyById(this.agencyId).subscribe(
        res => {
          this.saved.emit(true);
        }
      );
    }
}
