import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircuitService } from '../circuit.service';

@Component({
  selector: 'app-detele-cricuit',
  templateUrl: './detele-cricuit.component.html',
  styleUrls: ['./detele-cricuit.component.css']
})
export class DeteleCricuitComponent {
  @Input() circuitId: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();

  constructor(private circuitService: CircuitService) {}

  closeAction() {
    this.closed.emit(true);
  }

  save() {
    this.circuitService.delete(this.circuitId).subscribe(
      (res) => {
        this.saved.emit(true);
      }
    );
  }
}
