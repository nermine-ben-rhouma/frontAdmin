import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogService } from '../bolg-service.service';

@Component({
  selector: 'app-bolg-detele',
  templateUrl: './bolg-detele.component.html',
  styleUrls: ['./bolg-detele.component.css']
})
export class BolgDeteleComponent {
  @Input() bolgId: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();
  constructor(
    private bolgService: BlogService,){}
  
  closeAction() {
    this.closed.emit(true);
  }

  save() {
    this.bolgService.deleteBlog(this.bolgId).subscribe(
      () => {
        this.saved.emit(true);
      },
      (error) => {
        console.error('Error deleting rmateriel', error);
      }
    );
  }

}
