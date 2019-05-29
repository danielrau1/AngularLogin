import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router'; // [1.2b]

import {Login} from './login';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

                                                // [1.2b]
  constructor(private http: HttpClient, private router: Router) {
  }


  url = 'http://localhost/AngularLogin/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  // [1.1c]
  login(id: number, password: string): Observable<any> {
    const body = `id=${id}&password=${password}`;
    return this.http.post(this.url + 'Pages/login' , body, this.httpOptions);
  }


   // [1.2b]
    welcome(login) {
       console.log(login.id + ' ' + login.password);
      // this.router.navigate(['/welcome', login.id, login.password]);

  }

}
