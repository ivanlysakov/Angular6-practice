import { TestBed, inject } from '@angular/core/testing';

import { DepartureServiceService } from './departure-service.service';

describe('DepartureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartureServiceService]
    });
  });

  it('should be created', inject([DepartureServiceService], (service: DepartureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
