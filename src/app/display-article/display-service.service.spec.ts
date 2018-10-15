import { TestBed } from '@angular/core/testing';

import { DisplayServiceService } from './display-service.service';

describe('DisplayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayServiceService = TestBed.get(DisplayServiceService);
    expect(service).toBeTruthy();
  });
});
