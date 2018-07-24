import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostessesListComponent } from './hostesses-list.component';

describe('HostessesListComponent', () => {
  let component: HostessesListComponent;
  let fixture: ComponentFixture<HostessesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostessesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostessesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
