import { Component, OnInit } from '@angular/core';

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
  constructor(private config :GlobalConfig,private serviceBus:ServiceBus) { }

  ngOnInit() {
    this.Url=this.config.ApiBaseUrl;
    setTimeout(() => {
      this.IP=this.serviceBus.IP;
    }, 200);
    
  }
}
