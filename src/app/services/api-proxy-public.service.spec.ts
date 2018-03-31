import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyPublicService } from './api-proxy-public.service';

describe('ApiProxyPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyPublicService]
    });
  });

  it('should be created', inject([ApiProxyPublicService], (service: ApiProxyPublicService) => {
    expect(service).toBeTruthy();
  }));
});
