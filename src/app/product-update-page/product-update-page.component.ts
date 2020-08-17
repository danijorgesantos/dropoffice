import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { CollectionService } from '../_services/collection.service';

@Component({
  selector: 'app-product-update-page',
  templateUrl: './product-update-page.component.html',
  styleUrls: ['./product-update-page.component.scss']
})
export class ProductUpdatePageComponent implements OnInit {

  loginForm2: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  urlCollection: any = null;
  productId: any = null;

 // cloudinary variables
 selectedFile: File = null;

 response1: any = null;
 response2: any = null;
 response3: any = null;
 response4: any = null;
 response5: any = null;
 response6: any = null;

 res: any = null;
 newPost: any;
 newPhoto: any;

 constructor(
   private formBuilder: FormBuilder,
   private router: Router,
   private collectionService: CollectionService,
   private http: HttpClient,
   private route: ActivatedRoute
 ) { }

 ngOnInit(): void {
   this.loginForm2 = this.formBuilder.group({
     nameOfProduct: ['', [Validators.required]],
     urlOfProduct: ['', [Validators.required]],
     descriptionOfProduct: ['', [Validators.required]],
     detailedDescriptionOfProduct: ['', [Validators.required]],
     price: ['', [Validators.required]],
   });

   this.route.params.subscribe((params: Params) => {
     this.urlCollection = params['url'];
     this.productId = params['id'];
     console.log(this.urlCollection)
     console.log(this.productId)
     //this.getSingleProduct(this.urlProduct);
   },
     response => {
     },
     () => {
     });
 }

 // fotos cloudinary
 onFileSelected1(event) {
   this.selectedFile = event.target.files.item(0);

   const fd1 = new FormData();
   fd1.append('image', this.selectedFile, this.selectedFile.name);


   this.newPhoto = this.http.post('admin/upload', fd1)
     .subscribe((res: any) => {
       console.log(res)
       this.response1 = res.result.url;
     });
 }

 onFileSelected2(event) {
   this.selectedFile = event.target.files.item(0);

   const fd2 = new FormData();
   fd2.append('image', this.selectedFile, this.selectedFile.name);

   this.newPhoto = this.http.post('admin/upload', fd2)
     .subscribe((res: any) => {
       this.response2 = res.result.url;
     });
 }

 onFileSelected3(event) {
   this.selectedFile = event.target.files.item(0);

   const fd3 = new FormData();
   fd3.append('image', this.selectedFile, this.selectedFile.name);

   this.newPhoto = this.http.post('admin/upload', fd3)
     .subscribe((res: any) => {
       this.response3 = res.result.url;
     });
 }

 onFileSelected4(event) {
   this.selectedFile = event.target.files.item(0);

   const fd4 = new FormData();
   fd4.append('image', this.selectedFile, this.selectedFile.name);

   this.newPhoto = this.http.post('admin/upload', fd4)
     .subscribe((res: any) => {
       this.response4 = res.result.url;
     });
 }

 onFileSelected5(event) {
   this.selectedFile = event.target.files.item(0);

   const fd5 = new FormData();
   fd5.append('image', this.selectedFile, this.selectedFile.name);

   this.newPhoto = this.http.post('admin/upload', fd5)
     .subscribe((res: any) => {
       this.response5 = res.result.url;
     });
 }

 onFileSelected6(event) {
   this.selectedFile = event.target.files.item(0);

   const fd6 = new FormData();
   fd6.append('image', this.selectedFile, this.selectedFile.name);

   this.newPhoto = this.http.post('admin/upload', fd6)
     .subscribe((res: any) => {
       this.response6 = res.result.url;
     });
 }

 // convenience getter for easy access to form fields
 get f() { return this.loginForm2.controls; }

 public onSubmit() {
   this.submitted = true;
   this.collectionService.addProductToCollection(
     this.f.nameOfProduct.value,
     this.f.urlOfProduct.value,
     this.f.descriptionOfProduct.value,
     this.f.detailedDescriptionOfProduct.value,
     this.f.price.value,
     this.response1,
     this.response2,
     this.response3,
     this.response4,
     this.response5,
     this.response6,
     this.urlCollection
     )
     .pipe(first())
     .subscribe(
       data => {
         this.router.navigate(['/collections', this.urlCollection]);
       },
       error => {
         this.error = error;
         this.loading = false;
       });
 }

}
