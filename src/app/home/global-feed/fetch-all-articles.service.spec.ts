import { TestBed } from '@angular/core/testing';

import { FetchAllArticlesService } from './fetch-all-articles.service';

describe('FetchAllArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchAllArticlesService = TestBed.get(FetchAllArticlesService);
    expect(service).toBeTruthy();
  });
});
