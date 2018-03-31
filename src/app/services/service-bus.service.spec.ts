import { TestBed, inject } from '@angular/core/testing';

import { ServiceBusService } from './service-bus.service';

describe('ServiceBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceBusService]
    });
  });

  it('should be created', inject([ServiceBusService], (service: ServiceBusService) => {
    expect(service).toBeTruthy();
  }));
});
