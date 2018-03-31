import { Component } from '@angular/core';

import { CommonService } from './services/api-proxy-common.service'
import { ServiceBus } from './services/service-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public IP :string;
  constructor(private commonService:CommonService,
    private serviceBus:ServiceBus){
  }

  ngOnInit()
  {
    this.commonService.getClientIp().then(resp=>{
      this.IP=resp.json().origin;
      this.serviceBus.IP=this.IP;
    });
  }
}
