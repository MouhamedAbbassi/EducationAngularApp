import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { Observable } from 'rxjs';
import { Chambre } from '../model/chambre';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ReservationService implements OnInit {

  private baseURL="http://localhost:8080/api/v1/reservation";
  private baseURLNot="http://localhost:8080/api/v1/reservation/not-reserved";
  private baseURLEtud="http://localhost:8080/api/v1/reservation/students-without-reservation";
  private baseURLGet="http://localhost:8080/api/v1/reservation/update";
  private baseURLGetId="http://localhost:8080/api/v1/reservation/getBy";
  private baseURLGetSupp="http://localhost:8080/api/v1/reservation/delete";

  constructor(private httpClient:HttpClient) { }


  getListReservation(): Observable <Reservation[]>{

    return this.httpClient.get<Reservation[]>(`${this.baseURL} `);
  }
  createReservation(reservation : Reservation): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,reservation);
  }

  getNotReservedRooms(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]>(`${this.baseURLNot}`);
  }

  getEtudiantWithoutReservation(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>(`${this.baseURLEtud}`);
  }
  getReservationById(idReservation:number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseURLGetId}/${idReservation}`);
  }
  updateReservation(idReservation:number,Reservation):Observable<Object>{
    return this.httpClient.put(`${this.baseURLGet}/${idReservation}`,Reservation);
    }

    deleteReservation(idReservation: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURLGetSupp}/${idReservation}`);
    }

  






  ngOnInit(): void {
   
  }
}
