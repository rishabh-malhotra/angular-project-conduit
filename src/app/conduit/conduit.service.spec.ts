import { TestBed } from '@angular/core/testing';

import { ConduitService } from './conduit.service';

describe('ConduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConduitService = TestBed.get(ConduitService);
    expect(service).toBeTruthy();
  });
});
