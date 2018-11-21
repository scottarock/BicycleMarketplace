import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleShowComponent } from './bicycle-show.component';

describe('BicycleShowComponent', () => {
  let component: BicycleShowComponent;
  let fixture: ComponentFixture<BicycleShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
