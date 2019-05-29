import { Component, OnInit } from '@angular/core';
import {LoginService} from '../models/login.service';


import {Login} from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: Login[]; // [1.1b]

  // [1.1b]
 id: number;
password: string;

                                // [1.1b]
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }


  // [1.1b]
  onLogin() {
    console.log(this.id + ' ' + this.password);
    this.id *= 1;
    this.loginService.login(this.id, this.password).subscribe(login => {
      this.login = login;
      console.log(this.login);

      // [1.2a]
      if (this.login) {
     this.loginService.welcome(this.login);
      }

  });



}
}
