import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyCommonService } from './api-proxy-common.service';

describe('ApiProxyCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyCommonService]
    });
  });

  it('should be created', inject([ApiProxyCommonService], (service: ApiProxyCommonService) => {
    expect(service).toBeTruthy();
  }));
});
