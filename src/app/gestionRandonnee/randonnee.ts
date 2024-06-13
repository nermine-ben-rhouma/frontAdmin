import { Materiel } from "../gestion-materiel/materiel";
import { User } from "../user/user";

export class Randonnee {
    id?: number;
    titre?: string | null;
    description?: string | null;
    date?: Date | null;
    duree?: number | null;
    denivele?: number | null;
    difficulte?: string | null;
    distance?: number | null;
    picture?: string | null;
    userId?: number;
    nomber_de_participant?:number
    randonneeDetails?:RandonneeDetail[]
    reservations?: Reservation[];
    prix?:number
    agencyId?:number

    pictures?: Picture[];
}
export class Circuit {
    id?: number;
    ville?: string;
    depart?: string;
    arrival?: string;
    duree?: number;
    createdAt?: Date;
    updatedAt?: Date;
    randonneeId?: number;
    randonnee?: Randonnee;}
    export class Activity {
        id?: number;
        title?: string;
        description?: string;
        duration?: number;
        location?: string;
        difficult?: string;
        date?: Date;
        randonneeId?: number | null;
    }
    export class Reservation {
        id?: number;
        dateReservation?: Date;
        prix?: number;
        nombreParticipation?: number;
        userId?: number | null;
        randonneeId?: Randonnee ;
        clientId?: User ;
        isValid?: boolean; 
        cancel?: boolean;
  
       }
export class Picture {
    id?: number
    url?: string | null
    cloudinaryId?: string | null
    defaults?: boolean | null
    createdAt?: Date | null
    updatedAt?: Date | null
    createdBy?: number | null
    updatedBy?: number | null
    active?: boolean | null
    randonneeId?: number | Randonnee
    materielId?:number|Materiel
    agencyId?:any

}

export class RandonneeDetail {
    
    id?: number
  
    userId?: number;
  

    circuits?: Circuit[]
  
    randonneeId?: number | null;
  

    activity?: Activity[]
  
  
  }