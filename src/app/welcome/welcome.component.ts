import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // [1.2c]

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  // [1.2c]
  public id;
  public password;

                      // [1.2c]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // [1.2c]
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.password = (this.route.snapshot.paramMap.get('password'));
  }

}
