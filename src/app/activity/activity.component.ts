import { Component } from '@angular/core';
import { ActivityService } from './aactivity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  show: boolean=false;
  activities: any;
  activityId: number=0;
  constructor( private activityService: ActivityService) {}
  ngOnInit(): void {
    this.getAllactivity()
  }
  getAllactivity()
{
  this.activityService.getAllActivities().subscribe(data=>{
    console.log('data',data)
    this.activities=data
    console.log(this.activities)
  })
}  
  deleteAction(idactivity:number) {
    this.activityId=idactivity
      this.show = true;
    }
    clickShow(){
      this.show=!this.show
    }
    closeAction(){
      this.show=false
    }
    saved() {
      this.show = false;
      this.getAllactivity()
    }
}
