import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-admin-menu-route-home',
  templateUrl: './admin-menu-route-home.component.html',
  styleUrls: ['./admin-menu-route-home.component.scss']
})
export class AdminMenuRouteHomeComponent implements OnInit {

  loading = false;
  data = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    // tem de ser um observable para conseguir aceder ao curretn user, ele ainda não está loaded quando começa este componente.
    this.data = JSON.parse(localStorage.getItem('currentUser'));
  }
}
