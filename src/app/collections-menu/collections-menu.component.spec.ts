import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsMenuComponent } from './collections-menu.component';

describe('CollectionsMenuComponent', () => {
  let component: CollectionsMenuComponent;
  let fixture: ComponentFixture<CollectionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
