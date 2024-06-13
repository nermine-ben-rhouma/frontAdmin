import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from 'src/app/gestionRandonnee/randonnee';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.css']
})
export class GestionReservationComponent {
  reservations: Reservation[] = [];
  reservation: any;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
        this.reservations=this.reservations.filter((x:any)=>x.active==true)

      console.log("re",this.reservations)
      },
      (error) => {
        console.error('Error fetching reservations', error);
      }
    );
    
  }
  getReservation(id: number): void {
    this.reservationService.getReservationById(id).subscribe(
      (data) => {
        this.reservation = data;
        console.log(this.reservation)
      },
      (error) => {
        console.error('Error fetching reservation:', error);
      }
    );
  }

  // updateIsValid(id:any): void {
  //   this.reservation= this.getReservation(Number(id))

  // this.reservation.isValid=true 
  //   this.reservationService
  //     .updateReservation(this.reservation.id,this.reservation)
  //     .subscribe(
  //       (data) => {
  //         this.reservation = data;
  //         console.log(this.reservation)
  //       },
  //       (error) => {
  //         console.error('Error updating reservation:', error);
  //       }
  //     );
  // }
  updateIsValid(id: any): void {
    const reservation = this.reservations.find(r => r.id === id);
    if (reservation) {
      this.reservationService.updateReservation(id, { isValid: true }).subscribe(
        (updatedReservation) => {
          reservation.isValid = updatedReservation.isValid;
        },
        (error) => {
          console.error('Error updating reservation:', error);
        }
      );
    }
  }

  cancelReservation(id: any): void {
    const reservation = this.reservations.find(r => r.id === id);
    if (reservation) {
      this.reservationService.updateReservation(id, { cancel: true }).subscribe(
        (updatedReservation) => {
          reservation.cancel = updatedReservation.cancel;
        },
        (error) => {
          console.error('Error canceling reservation:', error);
        }
      );
    }
  }
}
