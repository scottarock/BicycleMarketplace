import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleUpdateListComponent } from './bicycle-update-list.component';

describe('BicycleUpdateListComponent', () => {
  let component: BicycleUpdateListComponent;
  let fixture: ComponentFixture<BicycleUpdateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleUpdateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
