import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { ChambreService } from 'src/app/Services/Chambre/chambre.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent {
  constructor(private es: ChambreService,private ac:ActivatedRoute,private router:Router){};
  chambre : any;


ngOnInit(): void {
  this.es.getAllData().subscribe((response) => {this.chambre = response})

  /*this.es.deleteBloc(this.ac.snapshot.params['idBloc']).subscribe(
    ()=>
      this.router.navigate(['back/bloc/bloclist'])
  )*/
}

}
