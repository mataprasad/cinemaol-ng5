import { GlobalConfig } from './app.global.config';

export class DIContainer {
    public static Providers= [
        { provide : GlobalConfig, useValue : Object.freeze(new GlobalConfig()) }
    ];
}
