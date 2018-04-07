import {Injectable} from '@angular/core';



@Injectable()
export class GlobalConfig {
    
    ApiBaseUrl:string ="https://httpbin.org" ;
    HttpBinBaseUrl:string ="https://httpbin.org" ;
    FirebaseApiBaseUrl:string="https://us-central1-orntic45.cloudfunctions.net/f1";

    constructor(){
     
    }
    
}


export function setupGlobalConfig() {
    return Object.freeze(new GlobalConfig());
}
