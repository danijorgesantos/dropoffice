import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { MessageService } from '../_services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public messages = [];
  public loading = true;
  public error;



  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.loading = true;
    this.messageService.getAllMessages()
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.messages = data;
            this.loading = false;
          }
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
