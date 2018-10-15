import { TestBed } from '@angular/core/testing';

import { NewArticleService } from './new-article.service';

describe('NewArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewArticleService = TestBed.get(NewArticleService);
    expect(service).toBeTruthy();
  });
});
