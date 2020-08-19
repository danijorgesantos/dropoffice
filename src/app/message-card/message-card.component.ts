import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input() message: any;

  public myMoment = null;

  constructor() { }

  ngOnInit(): void {
    this.myMoment = moment(Date.parse(this.message.date)).format('llll');
  }

}
