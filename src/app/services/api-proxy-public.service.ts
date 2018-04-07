import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GlobalConfig } from '../app.global.config'
import 'rxjs/add/operator/toPromise';

export abstract class ApiProxyPublic{
  abstract FillMovieist():Promise<Response>;
}

@Injectable()
export class ApiProxyPublicService extends ApiProxyPublic{

  constructor(private http:Http,private config:GlobalConfig) { 
    super();
  }

  FillMovieist():Promise<Response>{
    let url = `${this.config.HttpBinBaseUrl}/ip`;
    return this.http.get(url)
      .toPromise();
  }
}
