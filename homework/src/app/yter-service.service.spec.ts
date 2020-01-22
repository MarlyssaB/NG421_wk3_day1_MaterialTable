import { TestBed } from '@angular/core/testing';

import { YTerServiceService } from './yter-service.service';

describe('YTerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YTerServiceService = TestBed.get(YTerServiceService);
    expect(service).toBeTruthy();
  });
});
