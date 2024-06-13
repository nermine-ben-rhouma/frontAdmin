import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivityService } from '../aactivity.service';

@Component({
  selector: 'app-delet-activity',
  templateUrl: './delet-activity.component.html',
  styleUrls: ['./delet-activity.component.css']
})
export class DeletActivityComponent {
  @Input() activityId: any;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<boolean>();

  constructor(private activityService: ActivityService) {}

  closeAction() {
    this.closed.emit(true);
  }

  save() {
    this.activityService.deleteActivity(this.activityId).subscribe(
      (res) => {
        this.saved.emit(true);
      }
    );
  }
}
