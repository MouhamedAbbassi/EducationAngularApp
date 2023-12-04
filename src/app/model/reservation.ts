<<<<<<< HEAD
import { Chambre } from 'src/app/model/chambre';
import {User} from "../service/user.service";
=======
import { Etudiant } from 'src/app/model/etudiant';
import { Chambre } from 'src/app/model/chambre';
import { ChoixReservation } from 'src/app/model/choixReservation.enum';
>>>>>>> ea09540995da44f5173cec1571789c7f55553326



export class Reservation {

<<<<<<< HEAD

  idReservation: number;
  anneeUniversaire: Date;
  chambre: Chambre;
  etudiant: { id: number; email: String; username: String };

}
=======
   
    idReservation: number;
    anneeUniversaire: Date;
    chambre: Chambre;
    etudiant: Etudiant;
    choixReservation!: ChoixReservation[];

}
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
