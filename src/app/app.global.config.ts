import {
    Injectable
} from '@angular/core';
import {
    environment
} from '../environments/environment'

@Injectable()
export class GlobalConfig {

    public ApiBaseUrl: string = "https://httpbin.org";
    public HttpBinBaseUrl: string = "https://httpbin.org";
    public FirebaseApiBaseUrl: string = "https://us-central1-orntic45.cloudfunctions.net/f1";

    constructor() {
        this.ApiBaseUrl = environment.apiBaseUrl;
        this.HttpBinBaseUrl = environment.httpBinBaseUrl;
        this.FirebaseApiBaseUrl = environment.firebaseApiBaseUrl;
    }

}

export function setupGlobalConfig() {
    return Object.freeze(new GlobalConfig());
}