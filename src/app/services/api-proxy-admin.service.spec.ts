import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyAdminService } from './api-proxy-admin.service';

describe('ApiProxyAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyAdminService]
    });
  });

  it('should be created', inject([ApiProxyAdminService], (service: ApiProxyAdminService) => {
    expect(service).toBeTruthy();
  }));
});
