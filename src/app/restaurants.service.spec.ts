import { TestBed, inject } from '@angular/core/testing';

import { RestaurantsService } from './restaurants.service';

describe('RecipesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsService]
    });
  });

  it('should be created', inject([RestaurantsService], (service: RestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
