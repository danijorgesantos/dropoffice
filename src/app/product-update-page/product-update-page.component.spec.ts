import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdatePageComponent } from './product-update-page.component';

describe('ProductUpdatePageComponent', () => {
  let component: ProductUpdatePageComponent;
  let fixture: ComponentFixture<ProductUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
