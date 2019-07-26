import { TestBed } from '@angular/core/testing';

import { PlayerCountService } from './player-count.service';

describe('PlayerCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerCountService = TestBed.get(PlayerCountService);
    expect(service).toBeTruthy();
  });
});
