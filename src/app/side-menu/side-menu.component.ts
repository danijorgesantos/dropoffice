import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { MessageService } from '../_services/messages.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public numMessages = [];


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.messageService.getAllMessages()
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.numMessages = data.length;
          }
        },
        error => {
        });
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
