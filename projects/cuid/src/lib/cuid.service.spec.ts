import { TestBed } from '@angular/core/testing';

import { CuidService } from './cuid.service';

describe('CuidService', () => {
  let service: CuidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
