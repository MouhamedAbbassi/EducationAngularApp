import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from 'src/app/models/Bloc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private  httpClient:HttpClient) { }

  getAllData(): Observable<Bloc[]> {
    return this.httpClient.get<Bloc[]> ('http://localhost:9090/bloc/getAll');
  }
  addBloc(bloc: any) {
    return this.httpClient.post('http://localhost:9090/bloc/foyers/addBloc', bloc)
 }
 deleteBloc(id:any) {
  return this.httpClient.delete('http://localhost:9090/bloc/delete/'+id);
}

}
