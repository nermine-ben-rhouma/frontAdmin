import { Component } from '@angular/core';
import { RandomService } from '../randonnee.service';


@Component({
  selector: 'app-gestion-randonnee',
  templateUrl: './gestion-randonnee.component.html',
  styleUrls: ['./gestion-randonnee.component.css']
})
export class GestionRandonneeComponent {
  randoms: any[] = [];  
  // Or the appropriate type based on your data structure
  show: boolean = false;
  idrRandonnee: any;


  constructor(private randomService: RandomService) {}

  ngOnInit(): void {
    this.loadRandoms();
  }

  loadRandoms(): void {
    this.randomService.getAllRandoms().subscribe(
      (data) => {
        this.randoms = data[0];
        this.randoms=this.randoms.filter((x:any)=>x.active==true)

        console.log('Randoms loaded:', this.randoms);
      },
      (error) => {
        console.error('Error loading randoms', error);
      }
    );
  }
  deleteAction(id: any) {
    this.loadRandoms()
    this.idrRandonnee = id;
    this.show = true;
    console.log(this.show)
    this.loadRandoms()
  }

  clickShow() {
    this.show = !this.show;
  }

  closeAction() {
    this.show = false;
  }

  saved() {
    this.show = false;
  }
}
