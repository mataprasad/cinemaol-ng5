import { Http } from '@angular/http';

import { GlobalConfig,setupGlobalConfig } from './app.global.config';
import { ApiProxyCommonService, CommonService } from './services/api-proxy-common.service'
import { ApiProxyPublic, ApiProxyPublicService} from './services/api-proxy-public.service'
import { ServiceBusService, ServiceBus } from './services/service-bus.service'

export class DIContainer {
    public static Providers= [
        { provide : GlobalConfig, useFactory: setupGlobalConfig},
        { provide : CommonService, useClass : ApiProxyCommonService},
        { provide : ApiProxyPublic, useClass : ApiProxyPublicService},
        { provide : ServiceBus, useClass : ServiceBusService}
    ];
}