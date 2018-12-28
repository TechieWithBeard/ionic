import { Injectable } from '@angular/core';
import { Promotion } from '../../shared/promotion';
import { Observable } from 'rxjs/';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgService } from '../service/process-httpmsg.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

    getPromotions(): Observable<Promotion[]> {
      return this.http.get(baseURL + 'promotions')
          .pipe(map(res => this.processHTTPMsgService.extractData(res)
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }

    getPromotion(id: number): Observable<Promotion> {
      return  this.http.get(baseURL + 'promotions/' + id)
          .pipe(map(res => this.processHTTPMsgService.extractData(res)
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }

    getFeaturedPromotion(): Observable<Promotion> {
      return this.http.get(baseURL + 'promotions?featured=true')
          .pipe(map(res => this.processHTTPMsgService.extractData(res)[0]
          // .catch(error => this.processHTTPMsgService.handleError(error))
          ));
    }

}
