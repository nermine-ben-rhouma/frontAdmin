import { Randonnee } from "../gestionRandonnee/randonnee";
import { User } from "../user/user";

export class Reservation {
  
    id?: number;
   
    dateReservation?: Date; 
 
    prix?: number; 

    nombreParticipation?: number; 
 
    userId?: number ;  

    randonneeId?:Randonnee

    clientId?: User
    isValid?: boolean; 

    cancel?: boolean
}