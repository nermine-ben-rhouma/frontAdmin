import { Component } from '@angular/core';
import { ActivityService } from '../aactivity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent {
  activityId: number=0;
  data: any;
  constructor(private activityService: ActivityService,private route:ActivatedRoute)  {}
 ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.activityId = +params['id']; 
      this.getActivity(this.activityId)
   
    
    });
  }
  getActivity(activityId:number){
    this.activityService.getActivityById(activityId).subscribe(data=>{
      this.data=data
console.log("data",data)
      });
    


  }
}
