import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-materiel-delete',
  templateUrl: './materiel-delete.component.html',
  styleUrls: ['./materiel-delete.component.css']
})
export class MaterielDeleteComponent {
  @Input() materielId: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();
  constructor(
    private materielService: MaterielService,){}
  
  closeAction() {
    this.closed.emit(true);
  }

  save() {
    this.materielService.deleteMateriel(this. materielId).subscribe(
      () => {
        this.saved.emit(true);
      },
      (error) => {
        console.error('Error deleting rmateriel', error);
      }
    );
  }
}
