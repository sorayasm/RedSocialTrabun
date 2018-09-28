import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
public recipes$: any;

  constructor(public http: HttpClient) {
    this.postRecipes();
   }

   public postRecipes() {
    // tslint:disable-next-line:max-line-length
    this.http.get('..\assets\data\recipes-data.json')
    .subscribe(resp => {
      this.recipes$ = resp,
      console.log(this.recipes$);
    });
  }
}
