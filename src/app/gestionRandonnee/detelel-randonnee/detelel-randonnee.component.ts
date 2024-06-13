import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RandomService } from '../randonnee.service';

@Component({
  selector: 'app-detelel-randonnee',
  templateUrl: './detelel-randonnee.component.html',
  styleUrls: ['./detelel-randonnee.component.css']
})
export class DetelelRandonneeComponent {
  @Input() randoneeId: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();

  constructor(private randonneeService:  RandomService) {}

  closeAction() {
    this.closed.emit(true);
  }

  save() {
    this.randonneeService.deleteRandom(this.randoneeId).subscribe(
      () => {
        this.saved.emit(true);
      },
      (error) => {
        console.error('Error deleting randonnee', error);
      }
    );
  }
}
