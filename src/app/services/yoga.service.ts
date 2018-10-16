import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { YogaInfo } from '../interfaces/yoga.interface';

@Injectable({
  providedIn: 'root'
})

export class YogaService {
public positions: YogaInfo;

  constructor(public http: HttpClient) {
    this.yogaPos();
   }

   public yogaPos() {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://raw.githubusercontent.com/steven-isbell/student-yoga-api/master/yoga.json')
    .subscribe((resp: YogaInfo) => {
      this.positions = resp;
    });
  }
}
