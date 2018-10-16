import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Properties } from '../interfaces/recipes.interface';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
public info: Properties;

  constructor(public http: HttpClient) {
    this.postRecipes();
   }

   public postRecipes() {
    this.http.get('../../../assets/data/recipes-data.json')
    .subscribe((resp: Properties) => {
      this.info = resp;
      // console.log(this.info);
    });
  }
}
