import { TestBed, inject } from '@angular/core/testing';

import { CrewServiceService } from './crew-service.service';

describe('CrewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewServiceService]
    });
  });

  it('should be created', inject([CrewServiceService], (service: CrewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
