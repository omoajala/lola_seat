import { TestBed, inject } from '@angular/core/testing';

import { LolaService } from './lola.service';

describe('LolaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LolaService]
    });
  });

  it('should be created', inject([LolaService], (service: LolaService) => {
    expect(service).toBeTruthy();
  }));
});
