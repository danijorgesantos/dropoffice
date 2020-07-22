import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponentProductCardComponent } from './admin-component-product-card.component';

describe('AdminComponentProductCardComponent', () => {
  let component: AdminComponentProductCardComponent;
  let fixture: ComponentFixture<AdminComponentProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponentProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponentProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
