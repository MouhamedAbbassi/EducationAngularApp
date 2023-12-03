import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConstants} from "../commons/app.constant";
const httpOptions = {
  headers: new HttpHeaders({


    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user: any) {
    return this.http.post('http://localhost:9090/api/auth/signup', user, httpOptions);
  }

  login(user: any) {
    return this.http.post('http://localhost:9090/api/auth/login', user);
  }

  getCurrentuser() {
    return this.http.get('http://localhost:9090/api/user/current-user');
  }

  test() {
    return this.http.get('http://localhost:9090/api/user');
  }
}
