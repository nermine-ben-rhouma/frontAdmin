import { Component } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-gestoin-client',
  templateUrl: './gestoin-client.component.html',
  styleUrls: ['./gestoin-client.component.css']
})
export class GestoinClientComponent {

  clients: any[] = [];
  errorMessage: string = '';
  showAlert: boolean=false;
  ClientId: number=0;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.findAll().subscribe(
     (response:any) => {
        this.clients = response[0]; // Assuming response is [clients, count]
        this.clients=this.clients.filter((x:any)=>x.active==true)

        console.log(this.clients )
      }
   
    )
  }

 
  deleteAction(id:number){
    this.showAlert= true; 
   this.ClientId=id

  }
  closeAction(){
    this.showAlert=false
  }
  saveAction(){
    this.showAlert=false
   this.loadClients()
  }
}
