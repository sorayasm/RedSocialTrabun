import { TestBed, inject } from '@angular/core/testing';

import { YogaService } from '../services/yoga.service';

describe('YogaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YogaService]
    });
  });

  it('should be created', inject([YogaService], (service: YogaService) => {
    expect(service).toBeTruthy();
  }));
});
