import { Component,OnInit ,Input,Output, EventEmitter } from '@angular/core';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {
  constructor(private clientService: ClientService) {}
  @Input("clientId") 
  clientId:any
  @Output() delete= new EventEmitter()
  @Output() saved= new EventEmitter()
  onDelete(){
    this.delete.emit(true)// active the event 
  }
  onSave(){
   // active the event 
    this.clientService.deleteClient(this.clientId).subscribe((data:any)=>{
      this.saved.emit(true)
    })
  }

}
