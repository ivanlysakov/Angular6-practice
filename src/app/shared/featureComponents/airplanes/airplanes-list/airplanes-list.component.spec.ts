import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanesListComponent } from './airplanes-list.component';

describe('AirplanesListComponent', () => {
  let component: AirplanesListComponent;
  let fixture: ComponentFixture<AirplanesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
