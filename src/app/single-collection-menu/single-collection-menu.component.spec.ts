import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCollectionMenuComponent } from './single-collection-menu.component';

describe('SingleCollectionMenuComponent', () => {
  let component: SingleCollectionMenuComponent;
  let fixture: ComponentFixture<SingleCollectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCollectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
