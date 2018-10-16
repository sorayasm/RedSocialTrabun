import { TestBed, inject } from '@angular/core/testing';

import { RecipesService } from '../services/recipes.service';

describe('RecipesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesService]
    });
  });

  it('should be created', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
