import { TestBed } from '@angular/core/testing';

import { CoronaStatsService } from './corona-stats.service';

describe('CoronaStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronaStatsService = TestBed.get(CoronaStatsService);
    expect(service).toBeTruthy();
  });
});
