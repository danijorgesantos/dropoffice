import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionProductCardComponent } from './collection-product-card.component';

describe('CollectionProductCardComponent', () => {
  let component: CollectionProductCardComponent;
  let fixture: ComponentFixture<CollectionProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
