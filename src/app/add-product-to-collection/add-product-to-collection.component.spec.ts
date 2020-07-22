import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToCollectionComponent } from './add-product-to-collection.component';

describe('AddProductToCollectionComponent', () => {
  let component: AddProductToCollectionComponent;
  let fixture: ComponentFixture<AddProductToCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductToCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
