import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyUserService } from './api-proxy-user.service';

describe('ApiProxyUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyUserService]
    });
  });

  it('should be created', inject([ApiProxyUserService], (service: ApiProxyUserService) => {
    expect(service).toBeTruthy();
  }));
});
