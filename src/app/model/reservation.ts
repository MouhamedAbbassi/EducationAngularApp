import { Etudiant } from 'src/app/model/etudiant';
import { Chambre } from 'src/app/model/chambre';
import { ChoixReservation } from 'src/app/model/choixReservation.enum';



export class Reservation {

   
    idReservation: number;
    anneeUniversaire: Date;
    chambre: Chambre;
    etudiant: Etudiant;
    choixReservation!: ChoixReservation[];

}