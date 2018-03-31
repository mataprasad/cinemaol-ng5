import { Component,NgZone, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { GlobalConfig } from '../../app.global.config';
import { ServiceBus } from '../../services/service-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public IP:string;
  public Url:string;
  constructor(private zone:NgZone,private config :GlobalConfig,private serviceBus:ServiceBus) { }

  ngOnInit() {
    this.Url=this.config.ApiBaseUrl;
    this.IP=this.serviceBus.IP;
    this.serviceBus.change.subscribe(updated => {
      this.IP=this.serviceBus.IP;
    });

  }


}
