import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GlobalConfig } from '../app.global.config';

export abstract class CommonService{
  abstract getClientIp():Promise<Response>;
}

@Injectable()
export class ApiProxyCommonService extends CommonService {

  constructor(private http:Http,private config:GlobalConfig) {
    super();
   }

    getClientIp():Promise<Response>{
    let url = `${this.config.HttpBinBaseUrl}/ip`;
    return this.http.get(url)
      .toPromise();
  }
}
