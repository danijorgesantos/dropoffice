import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-admin-component-product-card',
  templateUrl: './admin-component-product-card.component.html',
  styleUrls: ['./admin-component-product-card.component.scss']
})
export class AdminComponentProductCardComponent implements OnInit {

  submitted = false;
  returnUrl: string;
  error = '';

  @Input() collectionProducts: any;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  public deleteProduct(id) {
    console.log(id);
    this.productService.deleteProduct(id);
  }

}
