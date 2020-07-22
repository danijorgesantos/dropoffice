import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page-menu',
  templateUrl: './admin-page-menu.component.html',
  styleUrls: ['./admin-page-menu.component.scss']
})
export class AdminPageMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
