import { TestBed, inject } from '@angular/core/testing';

import { HostessService } from './hostess.service';

describe('HostessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostessService]
    });
  });

  it('should be created', inject([HostessService], (service: HostessService) => {
    expect(service).toBeTruthy();
  }));
});
