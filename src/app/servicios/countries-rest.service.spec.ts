import { TestBed } from '@angular/core/testing';

import { CountriesRESTService } from './countries-rest.service';

describe('CountriesRESTService', () => {
  let service: CountriesRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
