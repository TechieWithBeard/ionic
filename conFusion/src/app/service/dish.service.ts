import { Injectable } from '@angular/core';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgService } from '../service/process-httpmsg.service';
import { map } from 'rxjs/operators';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }
    getDishes(): Observable<Dish[]> {
      return this.http.get(baseURL + 'dishes')
          .pipe(map(res => this.processHTTPMsgService.extractData(res)
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }

    getDish(id: number): Observable<Dish> {
      return  this.http.get(baseURL + 'dishes/' + id)
          .pipe(map(res => this.processHTTPMsgService.extractData(res)
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }

    getFeaturedDish(): Observable<Dish> {
      return this.http.get(baseURL + 'dishes?featured=true')
          .pipe(map(res => this.processHTTPMsgService.extractData(res)[0]
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }
}
