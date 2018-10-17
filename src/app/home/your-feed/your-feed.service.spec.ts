import { TestBed } from '@angular/core/testing';

import { YourFeedService } from './your-feed.service';

describe('YourFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourFeedService = TestBed.get(YourFeedService);
    expect(service).toBeTruthy();
  });
});
