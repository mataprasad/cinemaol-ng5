import { Http } from '@angular/http';

import { GlobalConfig,setupGlobalConfig } from './app.global.config';
import { ApiProxyCommonService, CommonService } from './services/api-proxy-common.service'
import { ServiceBusService, ServiceBus } from './services/service-bus.service'

export class DIContainer {
    public static Providers= [
        { provide : GlobalConfig, useFactory: setupGlobalConfig},
        { provide : CommonService, useClass : ApiProxyCommonService},
        { provide : ServiceBus, useClass : ServiceBusService}
    ];
}