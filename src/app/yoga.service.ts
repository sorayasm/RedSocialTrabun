import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YogaService {
public positions$: any;

  constructor(public http: HttpClient) {
    this.yogaPos();
   }

   public yogaPos() {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://raw.githubusercontent.com/steven-isbell/student-yoga-api/master/yoga.json')
    .subscribe(resp => {
      this.positions$ = resp,
      console.log(this.positions$);
    });
  }
}
