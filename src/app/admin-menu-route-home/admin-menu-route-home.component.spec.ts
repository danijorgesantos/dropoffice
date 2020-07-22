import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuRouteHomeComponent } from './admin-menu-route-home.component';

describe('AdminMenuRouteHomeComponent', () => {
  let component: AdminMenuRouteHomeComponent;
  let fixture: ComponentFixture<AdminMenuRouteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuRouteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuRouteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
