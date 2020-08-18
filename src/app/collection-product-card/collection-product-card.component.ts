import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-product-card',
  templateUrl: './collection-product-card.component.html',
  styleUrls: ['./collection-product-card.component.scss']
})
export class CollectionProductCardComponent implements OnInit {

  @Input() product: any;
  @Input() urlProduct: any;

  constructor() { }

  ngOnInit(): void {
  }

}
