import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
public posts$: any[] = [];

  constructor(public http: HttpClient) {
    this.postUser();
   }

   public postUser() {
    this.http.get('https://developers.zomato.com/api/v2.1/collections?city_id=83&count=20')
    .subscribe(resp => {
      // this.posts$ = resp,
      console.log(resp);
    });
  }
}
