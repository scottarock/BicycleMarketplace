import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleNewComponent } from './bicycle-new.component';

describe('BicycleNewComponent', () => {
  let component: BicycleNewComponent;
  let fixture: ComponentFixture<BicycleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
