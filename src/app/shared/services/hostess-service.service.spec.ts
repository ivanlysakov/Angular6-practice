import { TestBed, inject } from '@angular/core/testing';

import { HostessServiceService } from './hostess-service.service';

describe('HostessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostessServiceService]
    });
  });

  it('should be created', inject([HostessServiceService], (service: HostessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
