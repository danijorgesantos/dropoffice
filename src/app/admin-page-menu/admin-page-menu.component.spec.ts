import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageMenuComponent } from './admin-page-menu.component';

describe('AdminPageMenuComponent', () => {
  let component: AdminPageMenuComponent;
  let fixture: ComponentFixture<AdminPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
