import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GlobalConfig } from '../app.global.config'
import 'rxjs/add/operator/toPromise';

export abstract class ApiProxyPublic{
  abstract FillMovieList():Promise<Response>;
  abstract FillDateList(movieName:string):Promise<Response>;
  abstract FillTimeList(movieName:string,date:string):Promise<Response>;
  abstract FillMovieSlider():Promise<Response>;
}

@Injectable()
export class ApiProxyPublicService extends ApiProxyPublic{

  constructor(private http:Http,private config:GlobalConfig) { 
    super();
  }

  FillMovieList():Promise<Response>{
    let url = `${this.config.FirebaseApiBaseUrl}/get-show-movie-list`;
    return this.http.get(url)
      .toPromise();
  }

  FillDateList(movieName:string):Promise<Response>{
    let url = `${this.config.FirebaseApiBaseUrl}/get-show-date-list/${movieName}`;
    return this.http.get(url)
      .toPromise();
  }

  FillTimeList(movieName:string,date:string):Promise<Response>{
    let url = `${this.config.FirebaseApiBaseUrl}/get-show-time-list/${movieName}/${date}`;
    return this.http.get(url)
      .toPromise();
  }

  FillMovieSlider():Promise<Response>{
    let url = `${this.config.FirebaseApiBaseUrl}/movie-info`;
    return this.http.get(url)
      .toPromise();
  }
}
