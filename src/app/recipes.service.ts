import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Feature } from './interfaces/recipes.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
public recipes: Feature;

  constructor(public http: HttpClient) {
    this.postRecipes();
   }

   public postRecipes() {
    this.http.get('../../assets/data/recipes-data.json')
    .subscribe((resp: Feature) => {
      this.recipes = resp,
      console.log(this.recipes);
    });
  }
}
