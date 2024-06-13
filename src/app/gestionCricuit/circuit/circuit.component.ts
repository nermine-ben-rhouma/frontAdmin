import { Component } from '@angular/core';
import { CircuitService } from '../circuit.service';
@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent {
  circuits:any;
  show: boolean = false;
  idcircuit: any;

  constructor(private circuitService:  CircuitService) { }

  ngOnInit(): void {
    this.getAllCircuits();
  }

  getAllCircuits() {
    this.circuitService.findAll().subscribe((data:any) => {
      this.circuits =data[0];
      console.log(  this.circuits)
    });
  }

  deleteAction(idcircuit: any) {
    this.idcircuit = idcircuit;
    this.show = true;
    this.getAllCircuits()
  }

  clickShow() {
    this.show = !this.show;
    this.getAllCircuits()
  }

  closeAction() {
    this.show = false;
    this.getAllCircuits()
  }

  saved() {
    this.show = false;
    this.getAllCircuits()
  }
}
