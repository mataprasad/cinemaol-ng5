import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyBookingService } from './api-proxy-booking.service';

describe('ApiProxyBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyBookingService]
    });
  });

  it('should be created', inject([ApiProxyBookingService], (service: ApiProxyBookingService) => {
    expect(service).toBeTruthy();
  }));
});
