import { TestBed } from '@angular/core/testing';

import { RedditListContainerService } from './reddit-list-container.service';

describe('RedditListContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditListContainerService = TestBed.get(RedditListContainerService);
    expect(service).toBeTruthy();
  });
});
