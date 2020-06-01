import { TestBed } from '@angular/core/testing';

import { TeetimeService } from './teetime.service';

describe('TeetimeService', () => {
  let service: TeetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
