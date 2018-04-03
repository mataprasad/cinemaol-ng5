import {Injectable} from '@angular/core';



@Injectable()
export class GlobalConfig {
    
    ApiBaseUrl:string ="http://httpbin.org" ;
    HttpBinBaseUrl:string ="http://httpbin.org" ;

    constructor(){
     
    }
    
}


export function setupGlobalConfig() {
    return Object.freeze(new GlobalConfig());
  }
