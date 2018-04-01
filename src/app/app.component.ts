import { Component ,NgZone,OnInit} from '@angular/core';

import { CommonService } from './services/api-proxy-common.service'
import { ServiceBus } from './services/service-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public IP :string;
  constructor(private zone:NgZone,private commonService:CommonService,
    private serviceBus:ServiceBus){
  }

  ngOnInit()
  {
    this.makeAPiCall();
  }

  makeAPiCall(){
    this.commonService.getClientIp().then(resp=>{
      this.IP=resp.json().origin;
      this.serviceBus.IP=this.IP;
    
    });
  }
  onSetx(){
   
    this.IP="90";
    this.serviceBus.IP=this.IP;
    this.makeAPiCall();
  }
}
  
