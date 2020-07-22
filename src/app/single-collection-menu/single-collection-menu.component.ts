import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


import { ActivatedRoute, Params } from '@angular/router';
import { CollectionService } from '../_services/collection.service';

@Component({
  selector: 'app-single-collection-menu',
  templateUrl: './single-collection-menu.component.html',
  styleUrls: ['./single-collection-menu.component.scss']
})
export class SingleCollectionMenuComponent implements OnInit {

  loading = false;
  returnUrl: string;
  error = '';

  public collectionProducts = null;

  urlProduct: any = null;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService
  ) { }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.urlProduct = params['url'];
      this.getProducts();
    },
      response => {
      },
      () => {
      });
  }

  public getProducts() {
    this.loading = true;
    this.collectionService.getAllProductsFromCollection(this.urlProduct)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.collectionProducts = data;
          }
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
