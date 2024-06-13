import { Component,OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Input("userId") 
  userId:any
  @Output() delete= new EventEmitter()
  @Output() saved= new EventEmitter()
  onDelete(){
    this.delete.emit(true)// active the event 
  }
  onSave(){
    this.saved.emit(true)// active the event 
  }
}
