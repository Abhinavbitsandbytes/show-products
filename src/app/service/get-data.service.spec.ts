import { TestBed } from '@angular/core/testing';

import { GetData } from './get-data.service';

describe('GetData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetData = TestBed.get(GetData);
    expect(service).toBeTruthy();
  });
});
