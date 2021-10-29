import { TestBed } from '@angular/core/testing';

import { ContentstackService } from './contentstack.service';

describe('ContentstackService', () => {
  let service: ContentstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
