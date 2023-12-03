import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { Chambre } from 'src/app/models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private  httpClient:HttpClient) {}


  getAllData(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]> ('http://localhost:8080/chambre/chambres');
  }
}
