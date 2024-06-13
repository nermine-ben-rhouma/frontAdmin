import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-materiel-detail',
  templateUrl: './materiel-detail.component.html',
  styleUrls: ['./materiel-detail.component.css']
})
export class MaterielDetailComponent {
  materielId: number=0;
  materiel:any
  constructor (private route: ActivatedRoute, private materielService: MaterielService,) {
   
    }
  
    ngOnInit(): void {
    
      this.route.params.subscribe(params => {
        this.materielId = +params['id']; 
     this.LoadDataMateriel( this.materielId)
   
      });
  }
  LoadDataMateriel(id:number){
    this.materielService.getMateriel(id).subscribe(data=>{
      this.materiel=data
      console.log(data)

    })
  }
}
