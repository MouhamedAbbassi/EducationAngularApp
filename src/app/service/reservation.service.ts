<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../model/reservation";
import {Chambre} from "../model/chambre";
import {User} from "./user.service";
=======
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { Observable } from 'rxjs';
import { Chambre } from '../model/chambre';
import { Etudiant } from '../model/etudiant';
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class ReservationService {

  private baseURL="http://localhost:8080/api/v1/reservation";
  private baseURLNot="http://localhost:8080/api/v1/reservation/not-reserved";
  private baseURLEtud="http://localhost:8080/api/v1/reservation/students-without-reservation";
  private baseURLGet="http://localhost:8080/api/v1/reservation/update";
  private baseURLGetId="http://localhost:8080/api/v1/reservation/getBy";
  private baseURLGetSupp="http://localhost:8080/api/v1/reservation/delete";
=======
export class ReservationService implements OnInit {

  private baseURL="http://localhost:9090/api/v1/reservation";
  private baseURLNot="http://localhost:9090/api/v1/reservation/not-reserved";
  private baseURLEtud="http://localhost:9090/api/v1/reservation/students-without-reservation";
  private baseURLGet="http://localhost:9090/api/v1/reservation/update";
  private baseURLGetId="http://localhost:9090/api/v1/reservation/getBy";
  private baseURLGetSupp="http://localhost:9090/api/v1/reservation/delete";
>>>>>>> ea09540995da44f5173cec1571789c7f55553326

  constructor(private httpClient:HttpClient) { }


<<<<<<< HEAD
  getListReservation(): Observable <any>{

    return this.httpClient.get<any>(`${this.baseURL} `);
  }
  createReservation(reservation : any): Observable<Object>{
=======
  getListReservation(): Observable <Reservation[]>{

    return this.httpClient.get<Reservation[]>(`${this.baseURL} `);
  }
  createReservation(reservation : Reservation): Observable<Object>{
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
    return this.httpClient.post(`${this.baseURL}`,reservation);
  }

  getNotReservedRooms(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]>(`${this.baseURLNot}`);
  }

<<<<<<< HEAD
  getEtudiantWithoutReservation(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURLEtud}`);
=======
  getEtudiantWithoutReservation(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>(`${this.baseURLEtud}`);
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
  }
  getReservationById(idReservation:number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseURLGetId}/${idReservation}`);
  }
  updateReservation(idReservation:number,Reservation):Observable<Object>{
    return this.httpClient.put(`${this.baseURLGet}/${idReservation}`,Reservation);
<<<<<<< HEAD
  }

  deleteReservation(idReservation: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLGetSupp}/${idReservation}`);
  }


=======
    }

    deleteReservation(idReservation: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURLGetSupp}/${idReservation}`);
    }

  






  ngOnInit(): void {
   
  }
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
}
