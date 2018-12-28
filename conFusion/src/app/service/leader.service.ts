import { Injectable } from '@angular/core';
import { Leader } from '../../shared/leader';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgService } from '../service/process-httpmsg.service';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }


  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseURL + 'leaders')
        .pipe(map(res => this.processHTTPMsgService.extractData(res)
        // .catch(error => this.processHTTPMsgService.handleError(error))
        ));
  }

  getLeader(id: number): Observable<Leader> {
    return  this.http.get(baseURL + 'leaders/' + id)
        .pipe(map(res => this.processHTTPMsgService.extractData(res)
        // .catch(error => this.processHTTPMsgService.handleError(error))
        ));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseURL + 'leaders?featured=true')
    .pipe(map(res => this.processHTTPMsgService.extractData(res)[0]
    // .catch(error => this.processHTTPMsgService.handleError(error))
    ));
  }

}
