import { TestBed, inject } from '@angular/core/testing';

import { PilotServiceService } from './pilot-service.service';

describe('PilotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotServiceService]
    });
  });

  it('should be created', inject([PilotServiceService], (service: PilotServiceService) => {
    expect(service).toBeTruthy();
  }));
});
