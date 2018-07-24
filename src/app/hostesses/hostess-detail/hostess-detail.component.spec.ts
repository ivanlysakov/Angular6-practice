import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostessDetailComponent } from './hostess-detail.component';

describe('HostessDetailComponent', () => {
  let component: HostessDetailComponent;
  let fixture: ComponentFixture<HostessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
