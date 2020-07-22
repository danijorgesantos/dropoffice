import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { CollectionService } from '../_services/collection.service';


@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {

  loginForm2: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  // cloudinary variables
  selectedFile: File = null;

  response1: any = null;

  res: any = null;
  newPost: any;
  newPhoto: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private collectionService: CollectionService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm2 = this.formBuilder.group({
      collectionName: ['', [Validators.required]],
      collectionUrl: ['', [Validators.required]],
    });
  }

  // fotos cloudinary
  onFileSelected1(event) {
    this.selectedFile = event.target.files.item(0);

    const fd1 = new FormData();
    fd1.append('image', this.selectedFile, this.selectedFile.name);


    this.newPhoto = this.http.post('admin/upload', fd1)
      .subscribe((res: any) => {
        this.response1 = res.result.url;
      });
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm2.controls; }

  public onSubmit() {
    this.submitted = true;
    console.log(this.response1);

    this.collectionService.addCollection(
      this.response1,
      this.f.collectionName.value,
      this.f.collectionUrl.value,
      )
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/collections']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
