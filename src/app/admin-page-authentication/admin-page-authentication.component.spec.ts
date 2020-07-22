import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageAuthenticationComponent } from './admin-page-authentication.component';

describe('AdminPageAuthenticationComponent', () => {
  let component: AdminPageAuthenticationComponent;
  let fixture: ComponentFixture<AdminPageAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
