import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { ChambreService } from 'src/app/Services/Chambre/chambre.service';
import { Chambre } from 'src/app/model/chambre';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent {
  constructor(private es: ChambreService,private ac:ActivatedRoute,private router:Router){};
  chambre : any;

  filteredChambres:any;
  nomBlocFilter: string = '';

ngOnInit(): void {


  this.es.getAllData().subscribe((response) => {this.chambre = response})
  this.es.getAllData().subscribe((response) => {this.filteredChambres = response})
}


delete(id:any)
{
 this.es.deleteChambre(id).subscribe(()=>{
    // this.es.getAllData().subscribe((response) => {this.etudiants = response})
   this.chambre= this.chambre.filter((chambre:any)=>chambre.idChambre!=id)
 },error =>{
   console.log(error);
 });
}





applyFilter() {
  console.log('Filter applied:', this.nomBlocFilter);
  if (this.nomBlocFilter.trim() === '') {
    this.filteredChambres = this.chambre;

}else
 {  this.filteredChambres= this.chambre.filter((chambre:any)=>chambre.nomBloc==this.nomBlocFilter)};

}


}
