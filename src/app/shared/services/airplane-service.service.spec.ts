import { TestBed, inject } from '@angular/core/testing';

import { AirplaneServiceService } from './airplane-service.service';

describe('AirplaneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirplaneServiceService]
    });
  });

  it('should be created', inject([AirplaneServiceService], (service: AirplaneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
